Demo WebDriverIO with Mocha
=================

**Demo WebDriverIO** is a demonstration project of integration tests. In this project the user sends a message to the customer service on [Automation Practice](http://automationpractice.com).  
These tests are developed in JS with [WebDriverIO](http://webdriver.io/) and [Mocha](https://mochajs.org/)  

Requirements
---------------

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)
- Selenium Server: Here's how to set up a server: [Zalenium](https://github.com/zalando/zalenium) or [Selenium HQ](https://github.com/SeleniumHQ/docker-selenium)

Getting Started
---------------

Install the dependencies:

```bash
yarn install
```

Start a Selenium Server with Zalenium:

```bash
docker-compose up -d zalenium
```

In wdio.conf.js file configure the host of the Selenium Server `hostname` (default: localhost).  

If you don't want to start a Selenium Server, you can use Selenium Standalone from wdio (if you have JDK installed).  
So, you should uncomment the line 60 on `wdio.conf.js`.  
Then the tests run on your machine without a docker selenium.

Run e2e tests:

```bash
yarn tests:e2e
```

Run visual regression tests:

```bash
yarn tests:visualregression
```

Reports
---------------

![alt text](https://github.com/WarleyGabriel/demo-webdriverio-mocha/blob/master/images/allure-report.png)

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
yarn report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
yarn report:open
```

Also, you can see [Timeline report](https://github.com/QualityOps/wdio-timeline-reporter) in `./test-report/timeline`

Eslint and Prettier
---------------

Run check lint:

```bash
yarn code:check
```

Run format lint:

```bash
yarn code:format
```
