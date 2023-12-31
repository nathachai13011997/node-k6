# Load Test

If you want to store test results and use dashborad, run it as docker.

## Install and Run Project

### k6 on my own machine

Requires : [k6](https://k6.io/docs/get-started/installation/)

- open terminal or cmd

  ```bash
  cd ...\node-k6
  ```

- run scripts Load test

  ```bash
  k6 run ./scripts/main-constant1s.js
  ```

### Run Project Nodejs

```bash
npm run start
```

> Note : Project : localhost:8000

### Docker

Requires : [docker](https://www.docker.com/) and [node.js](https://nodejs.org/en/)

- open terminal or cmd

- pull image loadimpact/k6

  ```bash
  docker pull loadimpact/k6
  ```

- pull image influxdb:1.8.10

  ```bash
  docker pull influxdb:1.8.10
  ```

- pull image grafana/grafana

  ```bash
  docker pull grafana/grafana
  ```

- cd ...\node-k6

- run file docker compose

  ```bash
  docker compose up influxdb grafana -d
  ```

> Note : grafana : localhost:3300

- run scripts Load test

  ```bash
  docker compose run --rm k6 run /scripts/main-constant1s.js
  ```

- [SettingGrafana.docx](https://docs.google.com/document/d/1aoyWBcmrFlFlgoaF80wdMMlUKpHI0aHs/edit?usp=sharing&ouid=115671893352614505213&rtpof=true&sd=true)
