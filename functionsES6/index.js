import * as functions from "firebase-functions"
import cors from "cors"
import express from "express"

/* Express */
const app = express()
app.get("*", (request, response) => {
  response.send("Hello from Express on Firebase!")
})

// requires trailing slash '/' be appended on call, like so
// before: us-central1-<project-name>.cloud-functions.net/helloWorld
// after:  us-central1-<project-name>.cloud-functions.net/helloWorld/
export let requriesSlash = functions.https.onRequest(app)

// no '/' required to call correctly
export let noSlash = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return app(request, response)
})

/* With CORS */
const appWithCors = express()
appWithCors.use(cors({ origin: true }))
appWithCors.get("*", (request, response) => {
  response.send("Hello from Express with CORS on Firebase!")
})

export let requiresSlashUsingCors = functions.https.onRequest(appWithCors)

export let noSlashUsingCors = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return appWithCors(request, response)
})
