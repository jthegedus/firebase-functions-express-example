import * as functions from "firebase-functions"
import express from "express"

const app = express()
app.get("*", (req, res) => {
  res.send("Hello from Express on Firebase!")
})

// requires trailing slash '/' be appended on call, like so
// before: us-central1-<project-name>.cloud-functions.net/helloWorld
// after:  us-central1-<project-name>.cloud-functions.net/helloWorld/
export let addSlash = functions.https.onRequest(app)

// no '/' required to call correctly
export let noSlash = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}` // prepend '/' to keep query params
  }
  return app(req, res)
})
