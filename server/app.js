const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");

var { mongoose } = require("./db/mongoose");

const app = express();

const port = process.env.PORT || 4000;

// Allow Cross-Origin Requests
app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
