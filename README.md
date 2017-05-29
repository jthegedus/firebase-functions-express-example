# Express Server on Cloud Functions for Firebase

Host an Express Server in Cloud Functions for Firebase [with ES6+](https://github.com/jthegedus/firebase-functions-es6-example)!

Here is the accompanying [Medium Post](https://medium.com/@jthegedus).

## TLDR;
Host your Express Server on Cloud Functions enabling a low-cost, auto-scaling web server leveraging Firebase's sweet developer experience.

Cloud Functions uses [Express request and response objects](https://firebase.google.com/docs/functions/http-events#trigger_a_function_with_an_http_request) allowing us to pass an Express app [directly into the function](https://github.com/jthegedus/firebase-functions-express-example/blob/master/functionsES6/index.js#L12).

File of interest:
*   functionsES6/[index.js](https://github.com/jthegedus/firebase-functions-express-example/functionsES6/index.js)

## Installation
```
git clone https://github.com/jthegedus/firebase-functions-express-example
cd firebase-functions-express-example
yarn install
```
## Deploy to Firebase
```
yarn deploy
```
N.B.: You will need to connect the project to your Firebase project. Edit the name in .firebaserc or run `firebase init` and choose not to override any files.
