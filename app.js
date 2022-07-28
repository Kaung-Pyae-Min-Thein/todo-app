const { response } = require("express");
const express = require("express");
const app = express();
const _ = require("lodash");

const mongoose = require("mongoose");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//-----------------DB setup
mongoose.connect("mongodb://localhost:27017/todoDB");

const itemSchema = new mongoose.Schema({
  name: String
});

const itemCollection = mongoose.model("list", itemSchema);

const defaultItems = [{ name: "Morning" }, { name: "Afternoon" }, { name: "Evening" }];

// -------db for custom route parameter
const typeSchema = new mongoose.Schema({
  customType: String,
  lists: [itemSchema]
});

const typeCollection = mongoose.model("type", typeSchema);

//------------------Routes
app.get("/", (request, response) => {

  itemCollection.find({}, (err, foundItems) => {

    if (foundItems.length === 0) {

      itemCollection.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Successfully save default items to MongoDB");
        }
      });

      response.redirect("/");
    } else {
      response.render("home", { title: "Today", items: foundItems });
    }
  });
});

// ---------------route parameters
app.get("/:listType", (request, response) => {
  const customtype = _.capitalize(request.params.listType);

  // to overcome favicon auto added
  if (customtype === "Favicon.ico") return;

  typeCollection.findOne({ customType: customtype }, (err, foundType) => {
    if (!err) {
      if (!foundType) {
        //if db is empty insert new docs
        const types = new typeCollection({
          customType: customtype,
          lists: defaultItems
        });

        types.save();
        response.redirect("/" + customtype);
      }
      else {
        // show existing data
        response.render("home", { title: foundType.customType, items: foundType.lists });
      }
    }
  });

});

// ------------post
app.post("/", (request, response) => {
  const item = request.body.task;
  const tabName = request.body.tabName;

  // ready made list to insert into db
  const list = new itemCollection({ name: item });

  if (tabName === "Today") {
    // if today select main db and add new item
    list.save().then(() => console.log("Item added"));
    response.redirect("/");
  } else {
    // find other db and insert into there
    typeCollection.findOne({ customType: tabName }, (err, foundType) => {
      foundType.lists.push(list);
      foundType.save();
    });
    response.redirect("/" + tabName);
  }


});

app.post("/delete", (request, response) => {
  const checkboxId = request.body.checkbox;
  const tabName = request.body.tabName;

  console.log(tabName);
  console.log(checkboxId);

  if (tabName === "Today") {
    itemCollection.findByIdAndDelete(checkboxId, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Item deleted");
      }
    });
    response.redirect("/");
  }

  else {
    typeCollection.findOneAndUpdate({ customType: tabName },
      { $pull: { lists: { _id: checkboxId } } },
      (err) => {
        if (!err) {
          response.redirect("/" + tabName);
        }
      });
  }


});

//Server Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});