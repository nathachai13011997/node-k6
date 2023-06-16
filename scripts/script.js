import http from "k6/http"
import { sleep } from "k6"

export let options = {
  tags: {
    name: "lego"
  }
  //   insecureSkipTLSVerify: true,
  //   thresholds: {
  //     checks: ["rate>0.94"]
  //   },
  //   scenarios: {
  //     contacts1: {
  //       executor: "constant-vus",
  //       vus: 1,
  //       duration: "1s"
  //     }
  //   }
}

export default function () {
  http.get("https://test.k6.io")
  sleep(1)
}
