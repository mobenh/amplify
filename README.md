# AWS Amplify REST API
This fullstack project is built with Reactjs frontend and Nodejs backend. Hosted with AWS Amplify utilizing REST API. User enters customer name and gets a customer ID.

https://amplify.mobenh.com

## Technologies Used
* REST API
* React
* HTML
* CSS

### AWS Technologies used
* Amplify (for static web page hosting, API, and DNS record creation)
* Route 53 (for domain registration)

## Dependencies and AWS dependencies
* Install Node - https://nodejs.org/en/download
* Install npm
```
npm install -g npm
```
* Install Amplify - https://www.youtube.com/watch?v=n4DuYTzpvdE
```
npm install -g @aws-amplify/cli
amplify configure
```

## Executing program and deploying to AWS
* Download the repository to your computer and go to project file
```
git clone https://github.com/mobenh/amplify
cd amplify
```
* Add node modules to project files by runing comand
```
npm install
```
* Initialize Amplify in the project folder and answer questions
```
amplify init
  ? Enter a name for the project amplifydemoapp
  ? Initialize the project with the above configuration? Yes
  ? Select the authentication method you want to use: AWS profile
  ? Please choose the profile you want to use amplify-demo-app
```
* Add REST API to the project and anwser questions
```
amplify add api
  ? Select from one of the below mentioned services: REST
  ? Provide a friendly name for your resource to be used as a label for this category in the project: » api74b6af2c
  ? Provide an AWS Lambda function name: CustomerHandler
  ? Choose the runtime that you want to use: NodeJS
  ? Choose the function template that you want to use: Hello World
  ? Do you want to configure advanced settings? No
  ? Do you want to edit the local lambda function now? No
  √ Restrict API access? (Y/n) · no
  √ Do you want to add another path? (y/N) · no
```
* Deploy the app
```
amplify push
  ? Are you sure you want to continue? Yes
npm install aws-amplify @aws-amplify/ui-react
npm start
amplify add hosting
  ? Select the plugin module to execute Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)
  ? Choose a type Manual deployment
amplify publish
  ? Are you sure you want to continue? Yes
```
* Connect Amplify app URL to personal domain
  * Log in to your AWS console
  * Go to AWS Amplify and click on your app
  * Click on Domain registration on the left pane
  * Add your personal domain
