import http from "k6/http";
import { sleep, check } from "k6";
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const API_URL = "http://localhost:4000";

export const options = {
//virtual users
//   vus: 50,
//   //duration of the load test
//   duration: "45s",

//total duration will be 1min 20 seconds
    stages: [
      { duration: "10s", target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
      { duration: "1m", target: 100 }, // stay at 100 users for 10 minutes
      { duration: "10s", target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
      http_req_failed: ["rate<0.05"], // http errors should be less than 1%
      http_req_duration: ["p(95)<250"], // 95% of requests should be below 200ms
    },
};

export default function () {
  const response = http.get(API_URL + "/movies");

  check(response, {
    "is status 200": (r) => r.status === 200,
  });

  //helps simulate a real scenario
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
