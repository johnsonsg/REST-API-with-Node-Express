# REST-API-with-Node-Express

## How to build a REST API using Node.js and Express.js in 6 minutes?

When developing an application, you often need to create REST APIs to communicate with the server. The question is, why do you need a server? While there are many reasons, one is you perform all the database operations on the backend, so the sensitive data is not exposed to the browser.

Since you need to either retrieve, delete, create or update existing data, you need a communication channel to move the data around. And that channel is the REST API.

Before we dive into how you can make a REST API, let’s first take a look at Node.js and Expres.js.

## Node.js And Express.js

Before Node.js, you could only run JavaScript inside a web browser. It is a JavaScript runtime built on top of Chrome’s V8 engine. In layman terms, you can now run JavaScript in your terminal.

Express.js is a backend Node.js framework used to set up a Node.js based server. It is minimal and flexible and provides a robust set of features for web and mobile applications. You can create routes, middlewares, and everything you need in a server using it.

## Build A REST API

Let’s go ahead and start building a REST API using Node.js and Express.js. We will do it in steps to make it easier to follow.

### STEP #1

- You can skip this step if you have already installed Node.js on your computer. If you haven’t, download the latest version. Afterward, install it on your computer and then restart it.

### STEP #2

- Now create a directory on your computer and open it in your preferred code editor. Now create a `package.json` file inside this directory and copy-paste the following code there:

```
{
	"name": "rest-api",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"keywords": [],
	"author": "",
	"license": "ISC"
}

or you can do: `npm init `

```

You can write your name as a value to the `name` key.

We need to install Express.js in this project. For this, open your terminal inside this directory and run the following command:

```
npm install express
yarn add express

```

You can run your Node.js server via the `node` command, but the drawback is that you would have to restart the server whenever there is a change in the server files. What we can do is use `nodemon` instead. It will run the server without the previously mentioned drawback.

```
npm install -D nodemon
yarn add -D nodemon

```

I am installing `nodemon` as a developer dependency because your server code will not depend on it.

Once done, update your `package.json` file to add the `script `key. It will take an object as its value. Inside the object, you will define the commands and what they do. Add the `server` key in this object with the value nodemon index.js.

Here is an updated `package.json` file that you can refer to just in case:
