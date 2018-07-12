# React Faux Button

> Accessible React <button> usurper.

## Table of Contents

* [Features](#features)
* [Install](#install)
* [Motivation](#motivation)
* [Usage](#usage)

## NOTE
Use sparingly. If you can use the default <button> – possible more often than not – just do so.

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
import { Tooltip } from "react-faux-button";

/// CommonJS modules
const { Tooltip } = require("react-faux-button");
```

A [UMD](https://github.com/umdjs/umd) version is also available on [unpkg](https://unpkg.com/):

```html
<script src="https://unpkg.com/react-faux-button/dist/react-faux-button.umd.js"></script>
```

## Motivation
:construction: WIP :construction

## Usage
### Quick Start

If you want to just dive in, do this:

```jsx
import { FauxButton } from "react-faux-button";

<FauxButton>
  Print files
</FauxButton>
```

## References
The aria authoring practices offer a concise overview of button behaviour:

- https://www.w3.org/TR/wai-aria-practices-1.1/#button
- https://www.w3.org/TR/wai-aria-practices-1.1/examples/button/button.html
