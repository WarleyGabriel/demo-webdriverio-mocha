exports.config = {
  path: '/wd/hub',
  suites: {
    all: [
      './test/specs/*.spec.js',
    ],
  },
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'zal:recordVideo': true,
    'zal:name': 'DEMO INTEGRATION TESTS',
    'zal:build': 'WebDriverIO',
  }],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './error-shots',
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec', 'dot', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: './allure-logs/allure-results',
    },
  },
  mochaOpts: {
    compilers: [
      require('babel-core/register')({
        only: [
          /test/,
        ],
        babelrc: false,
        presets: ['env'],
      }),
    ],
    ui: 'bdd',
    timeout: 60000,
    reporter: 'wdio-allure-reporter',
  },
  before() {
    require('babel-polyfill');
    browser.windowHandleFullscreen();
  },
};
