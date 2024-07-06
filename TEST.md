# Simple HTTP Server

This is a simple HTTP server that responds with "Hello, World!".

## Prerequisites

- Node.js installed on your machine.

## Start the server

1. Open a terminal and navigate to the directory containing `app.js`.
2. Run the following command to start the server:

   ```sh
   node app.js
   ```

## Create a script to run the tests

   ```sh
      {
      "scripts": {
         "test": "mocha"
      }
      }
   ```

## Running the Tests

1. Ensure the server is running (follow the steps in "Running the Server").
2. Open a new terminal and navigate to the directory containing `test.js`.
3. Run the following command to install the necessary dependencies:

   ```sh
   npm install -g mocha
   ```

4. Run the tests using Mocha:

   ```sh
   npx mocha test.js
   ```

5. The tests will run and you should see the results in the terminal.

## for Ci 

   ```sh
   npm install --save-dev start-server-and-test
   npx start-test 3000
   ```


