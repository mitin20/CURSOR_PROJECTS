# Hello World Node.js App

This is a simple Node.js application that responds with "Hello, World!" when accessed via HTTP.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Docker](https://www.docker.com/)

## Getting Started

### Install Dependencies

```
npm install
```

### Run the Application

```
npm start
```

The application will be running at [http://localhost:3000](http://localhost:3000).

### Test the Application

Currently, there are no tests defined. You can run the default test script:

```
goto: TEST.md
```

### Containerize the Application

1. **Build the Docker Image**

    ```
    docker build -t hello-world-node .
    ```

2. **Run the Docker Container**

    ```
    docker run -p 3000:3000 hello-world-node
    ```

The application will be running at [http://localhost:3000](http://localhost:3000).

## Feedback

If you run into any trouble or have any feedback, feel free to post on the forum.
