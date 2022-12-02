# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# Payout Currency Converter 
​ 
Your task is to create a simple Payout Currency Converter using Deriv's 
WebSocket endpoint. The requirements of this task are as the following: 
​ 
1. Create a page with an input field, a dropdown and a table. 
2. Dropdown 
   - List out all the available payout currencies. The selected item in the 
dropdown is the `base_currency` 
3. Input Field 
   - This sets the value of the `base_currency`. 
   - Must be valid currency value. 
4. Table 
   - List out all of the currencies from `exchange_rates` call. 
   - 2 Columns: `Currency` and `Value`. 
      - `Currency` is the currency code (Example: `USD`, `AUD`, etc). 
      - `Value` is the converted value of the `base_currency` entered in the `Input 
Field` to the specified `currency`. 
      - This value must be update on every change on the `Input Field`. 
5. Formatting 
   - Round the USD, AUD and GBP exchange rate values to `2` decimal 
places. Leave the remaining exchange rate values as it is. 
​ 
- You need to initiate a connection to deriv websocket, the `ws` endpoint is: 
`wss://ws.binaryws.com/websockets/v3?app_id=1089`.<br> 
  Note: `1089` can be used as the `app_id`. Registering a new `app_id` is not 
needed. 
​ 
- An example of how you can initiate a websocket connection to deriv 
websocket: 
  Please keep in mind that the `onopen` and `onmessage` event listeners that 
listed below are just examples of how to send message and get response 
with deriv ws connection. You need to find the needed parameters from 
documentation links which provided in the next sections. 
​ 
  ```javascript 
  var ws = new 
WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089'); 
   
  ws.onopen = function(evt) { 
      ws.send(JSON.stringify({ticks:'R_100'})); 
  }; 
   
  ws.onmessage = function(msg) { 
     var data = JSON.parse(msg.data); 
     console.log('ticks update: %o', data); 
  }; 
  ``` 
 
​ 
- List of payout currencies can be obtained using the `payout_currencies` 
WebSocket API call. Please check the API Playground for `payout_currencies` 
WebSocket API call - https://api.deriv.com/api-explorer/#payout_currencies 