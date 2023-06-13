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
      duration: "1s"
    }
    // contacts2: {
    //   executor: "constant-vus",
    //   exec: 'SendAcrossNodes',
    //   vus: 5,
    //   duration: "1s",
    //   startTime: '10s'
    // },
    // contacts3: {
    //   executor: "constant-vus",
    //   exec: 'SendAcrossNodes',
    //   vus: 5,
    //   duration: "1s",
    //   startTime: '20s'
    // },
  }
}
