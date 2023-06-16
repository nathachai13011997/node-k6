import http from "k6/http"
import { sleep } from "k6"

export default function () {
  http.get("https://test.k6.io", {
    tags: {
      my_tag: "test"
    }
  })
  sleep(1)
}
