const express = require("express");

const app = express();
var cors = require('cors')

app.use(cors())

let MongoClient = require("mongodb").MongoClient;

app.get("/", (req, res) => {
  return MongoClient.connect("mongodb://"+(process.env.mongohost || "127.0.0.1:27017")).then((conn) => {
    return conn
      .db("mydb")
      .collection("glossary")
      .aggregate([
        { $sample: { size: 20 } }
    ])
      .limit(20)
      .toArray()
      .then((result) => {
        res.send(result.map(a => {

            return {
                name:a.name,
                description:a.description
            }
        }));
        conn.close();
      });
  });
});

app.listen(4000, () => {
});
