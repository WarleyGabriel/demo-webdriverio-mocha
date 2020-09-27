# E2E tests with WebDriverIO and Mocha

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Action Status](https://github.com/WarleyGabriel/demo-webdriverio-mocha/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/demo-webdriverio-mocha/actions)

This is a demonstration project of integration tests. In this project the user sends a message to the customer service on [Automation Practice](http://automationpractice.com).  
These tests are developed in TypeScript with [WebDriverIO V6](http://webdriver.io/) and [Mocha](https://mochajs.org/)

## Features

-   TypeScript
-   [Expect-webdriverio](https://github.com/webdriverio/expect-webdriverio)
-   [Visual regression tests](https://github.com/wswebcreation/wdio-image-comparison-service)
-   Page Object Pattern
-   [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
-   ESlint
-   Prettier
-   Husky
-   Github Actions example
-   Allure report (screenshots on failure)

## Requirements

-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npm run build
```

Run e2e tests:

```bash
npm run tests:e2e
```

Run visual regression tests:

```bash
npm run tests:visualregression
```

## Reports

### Allure

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
npm run report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
npm run report:open
```

## Prettier and Eslint

Run to format the code:

```bash
npm run code:format
```

## Commit

We use the best practices for message's commit, using [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) we can generate changelogs automatically.

Run `npm run commit` and commitizen will help you.
