export { default as Index } from "./index.js"

export let options = {
  insecureSkipTLSVerify: true,
  thresholds: {
    checks: ["rate>0.94"]
  },
  scenarios: {
    contacts1: {
      executor: "ramping-vus",
      exec: "Index",
      startVUs: 1,
      stages: [
        { duration: "15s", target: 5 },
        { duration: "15s", target: 5 }
      ]
      // gracefulStop: '4m'
    }
    // contacts2: {
    //   executor: "ramping-vus",
    //   exec: 'Index',
    //   startVUs: 1,
    //   stages: [
    //     { duration: "15s", target: 5 },
    //     { duration: "15s", target: 5 }
    //   ],
    //   startTime: '44s',
    // },
    // contacts3: {
    //   executor: "ramping-vus",
    //   exec: 'Index',
    //   startVUs: 1,
    //   stages: [
    //     { duration: "15s", target: 5 },
    //     { duration: "15s", target: 5 }
    //   ],
    //   startTime: '85s',
    // },
  }
}
