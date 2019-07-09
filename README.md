## DEMO WebDriverIO with Mocha

**DEMO WebDriverIO** is a project of integration tests. In this project the user send message to customer service on [Automation Practice](http://automationpractice.com). <br/>
The tests are developed in JS with [WebDriverIO](http://webdriver.io/) and [Mocha](https://mochajs.org/)<br/>

#### Requirements

- node >= 8.9.x
- yarn >= 1.9.x
- Selenium Server: Here's how to set up a server: [Grid Selenium](https://github.com/zalando/zalenium)

#### Getting Started

Install the dependencies:
```
yarn install
```

In wdio.conf.js file configure the host of the Selenium Server `hostname` <br/>

Run e2e tests:
```
yarn run e2e:tests
```

Run visual regression tests:
```
yarn run visual:regression:tests
```

#### Allure Reports

![alt text](https://github.com/WarleyGabriel/demo-webdriverio-mocha/blob/master/images/allure-report.png)

If you don't have allure command line installed on your machine yet, follow the instructions [here](https://github.com/allure-framework/allure-docs/blob/master/docs/reporting/commandline.adoc).

Run report:
```
yarn run report
```

If you have allure command line in your machine, you can run this command to open the report:
```
allure open allure-report
```

#### Eslint

Run check lint:
```
yarn run check
```

Run format lint:
```
yarn run format
```
