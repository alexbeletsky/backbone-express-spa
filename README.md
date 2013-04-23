# Backbone.js + Express.js SPA boilerplate

To build single pages application is seconds, not hours.

## Installation

Clone github repository,

```
$ git clone git@github.com:alexanderbeletsky/backbone-express-spa.git
```

Install npm dependencies,

```
$ npm install
```

Install bower dependencies,

```
$ bower install
```

Run app (development mode),

```
$ node app.js
```

## Description

This project is complete and minimal setup for building single page applications running on ``Express.js`` framework as back-end and ``Backbone.js`` as front-end.

SPA itself is quite simple concept, but it requires some infrascture to have in place, before build up new application. This project already includes this infrastructure.

## Express.js

``Express.js`` is used as back-end development framework. It's simple and easy to configure for SPA.

In API-oriented architecture back-end is responsible for 2 main purposes:

* Serving master page html
* Providing API end-points for web client

### Master page

*Master page* is main (and typically one) html page retuned from server. It includes all styles and javascript, provides very basic layout and placeholder for application.

```html
	<div class="container">
		<div id="app" class="container"></div>
	</div>
```

After master page is served back to client the rest of UI and logic is build by ``Backbone.js``.

### Serving master page


### API end-points

[TDB]

## Backbone.js

[TDB]

### RequireJS and CommonJS

[TDB]

### Routing

[TDB]

### View manager

[TDB]

### Applications

[TDB]

### Main view and subviews

[TDB]

### Templates

[TDB]

## Building for production

[TDB]

# Legal Info (MIT License)

Copyright (c) 2013 Alexander Beletsky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
