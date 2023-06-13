export { default as Index } from "./index.js"

export let options = {
  insecureSkipTLSVerify: true,
  thresholds: {
    checks: ["rate>0.94"]
  },
  scenarios: {
    contacts1: {
      executor: "constant-vus",
      exec: "Index",
      vus: 5,
      duration: "5m"
      // gracefulStop: '6m'
    }
    // contacts2: {
    //   executor: "constant-vus",
    //   exec: 'Index',
    //   vus: 5,
    //   duration: "5m",
    //   startTime: '5m10s'
    // },
    // contacts3: {
    //   executor: "constant-vus",
    //   exec: 'Index',
    //   vus: 5,
    //   duration: "5m",
    //   startTime: '10m20s'
    // },
  }
}
