const express = require("express");
const app = express();
const port = 3001;
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get("/api", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from

  const job = await getAsync("github");
  res.send(JSON.parse(job));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
