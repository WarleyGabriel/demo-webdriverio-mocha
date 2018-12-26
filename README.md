## DEMO WebDriverIO

**DEMO WebDriverIO** is a project of integration tests, in this project occurs the registration of a contact in the site [phptravels](https://phptravels.org) <br/>
The tests are developed in JS with [WebDriverIO](http://webdriver.io/) <br/>

#### Requirements

- node >= 8.9.x
- yarn >= 1.9.x
- Selenium Server: Here's how to set up a server: [Grid Selenium](https://github.com/zalando/zalenium)

#### Getting Started

Install the dependencies
```
yarn install
```

In package.json file configure the host of the Selenium Server `--host` <br/>

Run tests
```
yarn run tests
```

#### Allure Reports

![alt text](https://github.com/WarleyGabriel/poc-webdriverio/blob/master/image/allure-report.png)

Run report
```
yarn run report
```

#### Eslint

Run check lint
```
yarn run check
```

Run format lint
```
yarn run format
```
