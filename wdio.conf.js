const { join } = require('path');

exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  specs: [
    './test/specs/*.spec.js',
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'zal:recordVideo': true,
    'zal:name': 'Demo Integration Tests',
    'zal:build': 'WebDriverIO',
  }],
  logLevel: 'trace',
  bail: 0,
  baseUrl: 'http://automationpractice.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot', 'spec', ['allure', {
    outputDir: './allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
  }]],
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:@babel/register'],
    timeout: 60000,
  },
  services: [
    ['image-comparison',
      {
        baselineFolder: join(process.cwd(), './screenshots/reference/'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), './screenshots/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
      }],
  ],
  before() {
    browser.maximizeWindow();
  },
};
