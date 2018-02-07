# THIS REPO HAS BEEN MOVED
This example has been merged into my [blog-examples](https://github.com/jthegedus/blog-examples) repo. This repo will no longer be updated.

---

# Express Server on Cloud Functions for Firebase

Host an Express Server in Cloud Functions for Firebase.

Here is the accompanying [Medium Post](https://medium.com/@jthegedus/express-js-on-cloud-functions-for-firebase-86ed26f9144c).

## TLDR;
Host your Express Server on Cloud Functions enabling a low-cost, auto-scaling web server leveraging Firebase's sweet developer experience.

Cloud Functions uses [Express request and response objects](https://firebase.google.com/docs/functions/http-events#trigger_a_function_with_an_http_request) allowing us to pass an Express app [directly into the function](https://github.com/jthegedus/firebase-functions-express-example/blob/master/functions/index.js#L11).

File of interest:
*   functions/[index.js](https://github.com/jthegedus/firebase-functions-express-example/blob/master/functions/index.js)

## Installation
```
git clone https://github.com/jthegedus/firebase-functions-express-example
cd firebase-functions-express-example
yarn install
```
## Local Development
```
yarn serve
```
This will serve the Cloud Functions locally using the [Firebase emulator](https://firebase.google.com/docs/functions/local-emulator). Interestingly, the trailing `/` is not an issue when hosted locally.

## Deploy to Firebase
```
yarn deploy
```
*N.B.*: Replace `<project-name>` in the `.firebaserc` to connect the project to your Firebase project.

## A note on Code Compatibility
Everything was tested on Ubuntu 16.04 & Windows 10 with [Bash on Ubuntu on Windows](https://msdn.microsoft.com/en-au/commandline/wsl/about). If you wish for Windows native support please [submit an issue](https://github.com/jthegedus/firebase-functions-express-example/issues/new) so we can work on a Windows branch. Please report any macOS errors as I do not have access to a device to test. [My development environment can be found here](https://github.com/jthegedus/dotfiles).
