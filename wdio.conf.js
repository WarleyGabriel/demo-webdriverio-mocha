exports.config = {
  host: '',
  port: '',
  path: '/wd/hub',
  specs: [
    './test/specs/**/*.js',
  ],
  suites: {
    all: [
      './test/specs/*.js',
    ],
  },
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'zal:recordVideo': true,
    'zal:name': 'IT',
    'zal:build': 'WebDriverIO',
  }],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './error-shots',
  baseUrl: '',
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
