import * as functions from "firebase-functions"
import cors from "cors"
import express from "express"

/* Express */
const app1 = express()
app1.get("*", (req, res) => {
  res.send("Hello from Express on Firebase!")
})

export let api1 = functions.https.onRequest(app1)

/* Express with CORS */
const app2 = express()
app2.use(cors({ origin: true }))
app2.get("*", (request, response) => {
  response.send("Hello from Express on Firebase with CORS!")
})
export let api2 = functions.https.onRequest(app2)

/* Express with CORS & automatic trailing '/' solution */
const app3 = express()
app3.use(cors({ origin: true }))
app3.get("*", (request, response) => {
  response.send(
    "Hello from Express on Firebase with CORS! No trailing '/' required!"
  )
})

// not as clean, but a better endpoint to consume
export let api3 = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return app3(request, response)
})
