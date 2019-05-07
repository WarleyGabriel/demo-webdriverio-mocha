exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  specs: [
    './test/specs/**/*.spec.js',
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'zal:recordVideo': true,
    'zal:name': 'DEMO INTEGRATION TESTS',
    'zal:build': 'WebDriverIO',
  }],
  logLevel: 'trace',
  bail: 0,
  baseUrl: 'http://automationpractice.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot', 'spec', 'allure'],
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:@babel/register'],
    timeout: 60000,
  },
  before() {
    require('@babel/polyfill');
    browser.maximizeWindow();
  },
};
