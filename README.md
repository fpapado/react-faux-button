# React Faux Button

> Accessible React `<button>` usurper.

[![npm](https://img.shields.io/npm/v/react-faux-button.svg)](https://www.npmjs.com/package/react-faux-button)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-faux-button/dist/react-faux-button.js?compression=gzip)](https://unpkg.com/react-faux-button/dist/react-faux-button.js)
[![npm downloads](https://img.shields.io/npm/dm/react-faux-button.svg)](https://www.npmjs.com/package/react-faux-button)

## Table of Contents

* [Features](#features)
* [Install](#install)
* [Motivation](#motivation)
* [Usage](#usage)

## NOTE
Use sparingly. If you can use the default `<button>` – possible more often than not – just do so.
Incidentally, this is the reason the package is called "faux" button :)

## Features

* Accessible defaults.
* Full presentational control for the caller.
* Easy to understand source code. You should be able to fork and do your thing if desired.
* Ample documentation to help you understand the problem, in addition to the solutions.

What it does not do by itself:

* Style things. That is up to you :)

## Install

This package is distributed via [npm](https://www.npmjs.com/get-npm).

```shell
$ npm install --save react-faux-button
# or
$ yarn add react-faux-button
```

Then import according to your modules model and bundler, such as [Rollup](https://rollupjs.org/guide/en) and [Webpack](https://webpack.js.org/):

```js
// ES Modules
import { FauxButton } from "react-faux-button";

/// CommonJS modules
const { FauxButton } = require("react-faux-button");
```

A [UMD](https://github.com/umdjs/umd) version is also available on [unpkg](https://unpkg.com/):

```html
<script src="https://unpkg.com/react-faux-button/dist/react-faux-button.umd.js"></script>
```

## Motivation
When having an interactable item in your application, a `button` is almost always the right answer.
I have found that many developers are averse to using `button` due to its historical styling issues.

While I find the button resets (and more importantly, styling) to be straightforward nowadays, I often have
to work with codebases that use `div`s with an `onClick`. Those codebases might have non-straightforward
resets, might rely on the element being a `div`, and so on. In those cases, I find it particularly useful
to have an accessible `button` usurper. This is the one I use.

## Usage
### Quick Start

If you want to just dive in, do this:

```jsx
import { FauxButton } from "react-faux-button";

<FauxButton tag="div" onInteraction={() => /* do something */}>
  Print files
</FauxButton>
```

## References
The ARIA authoring practices offer a concise overview of expected button behaviour:
- https://www.w3.org/TR/wai-aria-practices-1.1/#button
- https://www.w3.org/TR/wai-aria-practices-1.1/examples/button/button.html
