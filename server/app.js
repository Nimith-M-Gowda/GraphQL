const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema/schema");
const Schemaexample1 = require("./schemaexample1/schemaexample1");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//---CORS SETUP---
app.use(cors());
//--------

app.use(
  "/graphql",
  graphqlHTTP({
    // schema : Schema ,
    schema: Schemaexample1,
    graphiql: true,
  })
);

//-------DB CONNECTION START----------

let dev_db_url =
  "mongodb+srv://process.env.DB_PASSWORD@cluster0.3qvb2.mongodb.net/databaseexample1?retryWrites=true&w=majority";
var mongodb = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(
  mongodb,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("Database CONNECTED");
});
//--------DB CONNECTION ENDS----------

app.listen(4000, () => {
  console.log("Server listening to port number 4000");
});
