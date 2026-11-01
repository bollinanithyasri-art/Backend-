# LAB 1: NODE.JS AND EXPRESS SERVER

## 1. Introduction

Backend development is an important part of web development. It is responsible for handling requests from users, processing data, and sending responses to the client.

Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code outside the browser. It is commonly used to develop fast and scalable server-side applications.

Express.js is a lightweight web framework built on top of Node.js. It makes server creation, routing, and request handling easier.

In this lab, we create a basic HTTP server using Node.js and an Express server using Express.js. We also create different routes and test them using a web browser.

## 2. Aim

To understand the basics of backend development by creating an HTTP server using Node.js and an Express server using the Express framework. To implement different routes and understand how a server handles client requests and sends responses.

## 3. Objectives

- To understand the working of Node.js.
- To learn how to create a basic HTTP server.
- To understand the purpose of Express.js.
- To install and use Express.js in a Node.js project.
- To create different routes using Express.
- To send text and JSON responses from the server.
- To understand HTTP status codes.
- To handle invalid routes using a 404 error response.
- To test server responses using a web browser.

## 4. Software Requirements

| Requirement | Description |
|---|---|
| Operating System | Windows |
| Code Editor | Visual Studio Code |
| Runtime Environment | Node.js |
| Package Manager | npm |
| Framework | Express.js |
| Browser | Google Chrome |
| Version Control | Git and GitHub |

## 5. Introduction to Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment. It allows JavaScript to run on the server side instead of only inside a web browser.

**Features of Node.js:**

1. Open Source: Node.js is freely available.
2. Cross Platform: It works on Windows, Linux, and macOS.
3. Fast Execution: It uses the V8 JavaScript engine.
4. Asynchronous: It can handle operations without blocking other tasks.
5. Event Driven: It uses events to manage different operations.
6. Scalable: It is suitable for applications that handle many requests.

## 6. Introduction to Express.js

Express.js is a web application framework for Node.js. It provides simple methods to create web servers and manage different URL routes.

**Advantages of Express.js:**

- It makes server development easier.
- It provides simple routing methods.
- It supports middleware.
- It can send text and JSON responses.
- It helps developers build REST APIs.
- It reduces the amount of code required to create a server.

## 7. Project Setup

First, create a project folder and open it in Visual Studio Code.

Initialize the Node.js project using:

```bash
npm init -y
```

This command creates a `package.json` file containing project information and configuration.

Install Express.js using:

```bash
npm install express
```

This command installs the Express framework and adds it as a project dependency.

## 8. Creating a Basic HTTP Server Using Node.js

Node.js provides a built-in HTTP module to create web servers.

The `http` module helps the server receive requests and send responses to clients.

**Code:**

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

**Explanation:**

- `require('http')` imports the HTTP module.
- `http.createServer()` creates a new HTTP server.
- `req` represents the incoming request.
- `res` represents the response sent by the server.
- `res.end("Hello")` sends the response to the browser.
- `server.listen(3000)` starts the server on port 3000.

**Output:**

When we open `http://localhost:3000` in the browser, it displays:

```text
Hello
```

## 9. Creating an Express Server

Express.js makes it easier to create a server and handle different routes.

**Code:**

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to my Node.js server!");
});

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});
```

**Explanation:**

- `require('express')` imports Express.
- `express()` creates an Express application.
- `app.get()` defines a GET route.
- `res.send()` sends a response to the client.
- `app.listen()` starts the server on port 3000.

## 10. Implementing Different Routes

Routes are used to define how a server responds to different URLs.

### A. Home Route

```javascript
app.get('/', (req, res) => {
    res.send("Welcome to my Node.js server!");
});
```

**Explanation:** This route displays a welcome message when the user visits the home page.

**URL:** `http://localhost:3000/`

**Output:** `Welcome to my Node.js server!`

### B. About Route

```javascript
app.get('/about', (req, res) => {
    res.json({
        name: "B. Nithya Sri",
        section: "CSE-AIDE"
    });
});
```

**Explanation:** This route sends student information in JSON format.

**URL:** `http://localhost:3000/about`

**Output:**

```json
{
    "name": "B. Nithya Sri",
    "section": "CSE-AIDE"
}
```

### C. Time Route

```javascript
app.get('/time', (req, res) => {
    res.send(new Date().toString());
});
```

**Explanation:** This route displays the current date and time of the server when the request is made.

**URL:** `http://localhost:3000/time`

**Output:** Displays the current date and time.

### D. 404 Error Route

```javascript
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});
```

**Explanation:** This route handles requests for URLs that are not defined in the application. It sends a 404 status code with an error message.

**URL:** `http://localhost:3000/unknown`

**Output:** `404 - Page Not Found`

### E. Hello Route (If implemented in your code)

If you added a separate `/hello` route, include its actual code and output here. If you did not add it, do not include this section as an implemented route.

## 11. Understanding HTTP Methods

HTTP methods define the type of operation a client wants to perform on a server.

- GET: Used to retrieve information from the server.
- POST: Used to send new data to the server.
- PUT: Used to update existing data.
- DELETE: Used to delete data from the server.

In this experiment, we mainly use the GET method to retrieve responses from different routes.

## 12. Understanding HTTP Status Codes

HTTP status codes indicate whether a request was successful or encountered an error.

| Status Code | Meaning |
|---|---|
| 200 | OK – Request completed successfully |
| 201 | Created – New resource created |
| 400 | Bad Request – Invalid request |
| 404 | Not Found – Requested page does not exist |
| 500 | Internal Server Error – Server encountered an error |

In this experiment, the home, about, and time routes normally return status code 200. An undefined route returns status code 404.

## 13. Testing the
