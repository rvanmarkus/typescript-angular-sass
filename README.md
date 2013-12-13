frontend-bootstrap
==================

What da fuck ?
--------------

frontend-bootstrap is the bootstrap I'm using **for  front-end developments**. It contains all preconfigured packages that I love, pre-configured grunt and package.json making it easy to use.

What it contains ?
------------------

The package comes with the following grunt scripts preconfigured :

*   **Typescript** for programming strong typed javascript
*   **Sass** to make easy to maintain CSS
*   **Uglify** to compress javascript
*   **Cssmin** to compress CSS
*   **Imgmin** to compress images
*   **Jshint** to check javascript syntaxis

How to use it ?
---------------

You'll need to make all this working, [npmjs](https://npmjs.org/doc/README.html) up and running on your computer.

First of all, clone the repository :

```
git clone https://github.com/FlyersWeb/frontend-bootstrap.git
```

Next install necessary packages :

```
cd frontend-bootstrap
npm install
```

After that just run grunt to check source code and to generate final assets :

```
grunt test
grunt
```

That's it ! Really easy right ?

Architecture
------------

The generated files architecture is separated in two.

Inputs

1.  *assets/ts* : Typescript folder (put there your scripts)
2.  *assets/sass* : Sass folder (put there your styles)
3.  *assets/imgmin* : Images folder (put there your images)

Outputs

1.  *assets/js* : Generated script (final is called frontend-bootstrap.min.js)
2.  *assets/css* : Generated css (final is called frontend-bootstrap.min.css)
3.  *assets/img* : Optimized images goes here

That's it. Make a try.


Contact
-------

@flyersweb

www.flyers-web.org
