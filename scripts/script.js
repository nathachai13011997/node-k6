import http from "k6/http"
import { sleep } from "k6"

const generateTransactionId = () => {
  const dateTime = new Date()
  const dd = String(dateTime.getDate()).padStart(2, "0")
  const mm = String(dateTime.getMonth() + 1).padStart(2, "0")
  const yyyy = String(dateTime.getFullYear())
  return yyyy + mm + dd + Date.now()
}

export let options = {
  tags: {
    team: "lego",
    transaction: generateTransactionId()
  },
  scenarios: {
    contacts1: {
      executor: "constant-vus",
      vus: 10,
      duration: "1s"
    }
  }
}

// k6 run scripts/script.js --out influxdb=http://192.168.1.34:8086/k6
export default function () {
  http.get("https://test.k6.io")
  sleep(1)
}
