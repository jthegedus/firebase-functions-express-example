import * as functions from "firebase-functions"
import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello from Express on Firebase!")
})

export let helloWorld = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}` // prepend to keep query params
  }
  return app(req, res)
})
