# Node & Express JS

Rundown of a basic application in expressJS, based on Node.
This will guide you through the process of building an application with
expressJS, covering the basics, ie, routes, templates, handling etc.

## The Crux

To refresh the basics of async operations and other miscellaneous operations,
check out the [Node](./Node/) folder; it covers the basic code as covered in
[this](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_)
tutorial by Bucky Roberts. (you should check out his channel _thenewboston_ on
YouTube, it covers the basics of a lot of other concepts).

## Installation and Setup

First, have node installed on your PC. You can check whether node (and
effectively npm) is installed by running ` node --version`. If node isn't
installed, you can follow [this
tutorial](https://nodejs.org/en/download/package-manager/) for the same. Once
you have node installed, you can install express and express-generator (useful
for modeling entire applications without the inital manual setup). 
```
npm install -g express express generator
```
The `-g` option installs it globally which is probably what you want to do
anyways. (Omit if not required)

## Inital Application and POSTING to browser

Once you have express installed (`express -h`), you can create the basic
boilerplate code for your application:
```
express --view=ejs <application name>
```
Here I am using [_ejs_](https://www.npmjs.com/package/ejs) as my templating engine for the views. Some popular template
engines that work with Express are Pug, Mustache, and EJS.

Okay so once that is done, you can `cd <application>` and run:
```
DEBUG=<application>:* npm start
```
This will run your application; navigating to `http://localhost:3000/` should
confirm this.

## Basic routing and templates

Let us create a basic route. In `routes/index.js` we can define a new route as:
```
router.get('/name/:name', function(req, res, next) {
    res.render('name', {
            'title' : "User Page",
            'name' : req.params.name,
            'age' : 23
    })
});
```
The `:name` is basically a request parameter. This route tells express to load
the template called `name.ejs` and pass it the given params. In our template we
can write:
```
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
        <h1>Hello, <%= name %>!</h1>
        <p>Age : <%= age %></p>
</body>
</html>
```
Now, if we navigate to <host>/name/<name> it should display _Hello, <Name>!_.
The cool thing about passing parameters this way is that these params are
**regex controlled**. You can specify different pages for different use-cases at
the route level itself. For example:
```
router.get('/name/:name([A-Z]{3}s|d')
```
This will/should match only those names that have 4 letters, begin with 3 capital letters and end with an s or d. Mind you, the regexs you write here aren't _quite_ the same as normal ES3 ones, refer to [this](https://stackoverflow.com/questions/38155631/regular-expression-for-route-params-in-express-js) thread for some more reading. This [express route tester](http://forbeslindesay.github.io/express-route-tester/) is a pretty handy tool to see whether your routes work the way you want them too.

