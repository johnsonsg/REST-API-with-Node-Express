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

```
{
	"name": "rest-api",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"server": "nodemon index.js"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"nodemon": "^2.0.15"
	},
	"dependencies": {
		"express": "^4.17.3"
	}
}
```

### STEP #3

Now create a file called `index.js` in your project directory and import express inside it.

```
//commonjs syntax
const express = require('express');
//or
// ES6 syntax
import express from 'express';

```

Now create an express application by adding the following code in the `index.js` file:

```
const app = express();

```

We need to introduce a middleware so our server recognizes the incoming request objects as JSON objects. For that, add the following piece of code in `index.js` file:

```
app.use(express.json());

```

Lastly, we need to listen for a connection to know that our server is running. You can do this by adding the following lines of code in your `index.js` file:

```
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));

```

After all this, the index.js file will look something like this:

```
// importing packages
const express = require('express');
const app = express();

// middlewares
app.use(express.json());

// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));

```

### STEP #4

Create a folder called `routes` in the root directory and inside this folder, create a file called `hello.js`. Inside the file, copy-paste the following code:

```
// importing packages
const express = require('express');
const router = express.Router();
router.get(`/`, function (req, res) {
	res.status(200).json({msg: `It's a GET request.`});
});
router.post(`/`, function (req, res) {
	res.status(200).json({msg: `It's a POST request.`});
});
router.put(`/`, function (req, res) {
	res.status(200).json({msg: `It's a PUT request.`});
});
router.delete(`/`, function (req, res) {
	res.status(200).json({msg: `It's a DELETE request.`});
});
module.exports = router;

```

I am importing packages at the top of the file and creating a router using the express package. Afterward, I have written four functions of `router` to handle the `GET, POST, PUT, and DELETE` requests. In each of these functions, I am passing a callback function as the second parameter to send a response to the client.

Lastly, I am exporting the router I have just created from this file.

### STEP #5

Import this file inside the `index.js` file using the following code:

```
const hello = require('./routes/hello');

```

Now register this route in your application like this:

```
// adding routes
app.use('/hello', hello);

```

The functions inside the hello.js file will run when the client requests the /hello endpoint. For instance, https://api/hello.

The code in the index.js file will look like this in the end:

```
// importing packages
const express = require('express');
const app = express();
const hello = require('./routes/hello');
// middlewares
app.use(express.json());
// adding routes
app.use('/hello', hello);
// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));

```

### STEP #6

Now start the server by running the following command in the terminal:

```
npm run server
yarn run server
```

Go to this URL. You will see a response like the following:
http://localhost:5500/hello

You should see: {"msg":"It's a GET request."}

The GET request is executing because when you call an API via the browser’s address bar, it makes a GET request to the API.

## Wrap Up

If you followed along until now, you would have successfully created a REST API. Since it is a server, make sure you handle CORS; otherwise, your API requests will be blocked. Other than this, I hope this article helped you understand how to create a simple REST API.

## Handling CORS in Express Backend

Handling CORS is simple enough in JavaScript. The folks who built Express.js (JavaScript backend framework) have also written a node package to enable CORS with different options. Let’s do it in steps to make things easier:

### STEP #1

I am hoping you have a `Node.js and Express.js` backend set up. Open the terminal and type in the following command. Once you have done, press Enter.

```
npm install cors
yarn add cors

```

This command will download and install cors package in your project. You can open the package.json file to see cors in the dependency object.

### STEP #2

Now open your server’s entry point file and import cors at the top. Here is how you can do it:

```
// es6 syntax
import cors from ‘cors’;

//commonjs syntax
const cors = require(‘cors’);

```

### STEP #3

CORS is handled in your backend’s middlewares. So if you want to allow all CORS requests to your backend, you can do this using the following code snippet:

```
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

```

If you want your backend to be accessed via a single origin, you can do the following:

```
const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
	origin: 'http://example.com',
	optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

```

The backend will only be accessible by the origin URL defined in the corsOptions object.

## Wrap Up

This was a brief introduction to handling CORS in your server. I hope you now know why your cross-origin requests fail and how to fix them.
