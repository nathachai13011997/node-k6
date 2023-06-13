import http from "k6/http"
import { check, sleep } from "k6"
import { Rate } from "k6/metrics"

const errorRate = new Rate("errors")

const host = "http://host.docker.internal:8000" // If run docker use this host
// const host = "http://localhost:8000" // localhost

//localhost
const url = `${host}/hello`

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer onlinestore"
}

const payload = {}

export default function () {
  const res = http.get(url, JSON.stringify(payload), { headers })

  const checkOutput = check(res, {
    "is status 200": (r) => r.status === 200
  })

  if (!checkOutput) {
    errorRate.add(true)
  }

  // sleep(1)
}
