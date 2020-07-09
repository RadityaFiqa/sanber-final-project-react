const CronJob = require("cron").CronJob;
const fetch = require("node-fetch");
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const BASE_URL = "https://jobs.github.com/positions.json";

const GetJobs = () => {
  var job = new CronJob(
    "* * * * * *",
    FetchJob(),
    null,
    true,
    "America/Los_Angeles"
  );
};

const FetchJob = async () => {
  let page = 1;
  let arrayJob = [];
  while (true) {
    const res = await fetch(BASE_URL + "?page=" + page).then((res) =>
      res.json()
    );
    console.log("Successfuly get", res.length);
    if (res.length != 0) {
      arrayJob.push(...res);
      page++;
    } else {
      break;
    }
  }
  console.log("Total get", arrayJob.length);

  const filteredJobs = arrayJob.filter((job) => {
    const title = job.title.toLowerCase();
    if (
      title.includes("senior") ||
      title.includes("manager") ||
      title.includes("sr") ||
      title.includes("architect")
    ) {
      return false;
    } else {
      return true;
    }
  });
  console.log("Filtered get", filteredJobs.length);

  const success = await setAsync("github", JSON.stringify(filteredJobs));
  console.log({ success });
};

GetJobs();
