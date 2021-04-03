import { join } from 'path';

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./dist/**/*.spec.js'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        timeout: 30000,
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    services: [
        [
            'image-comparison',
            {
                baselineFolder: join(process.cwd(), './screenshots/reference/'),
                formatImageName: '{tag}-{logName}-{width}x{height}',
                screenshotPath: join(process.cwd(), './screenshots/'),
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,
            },
        ],
        ['chromedriver'],
        [
            'performancetotal',
            {
                disableAppendToExistingFile: false,
                performanceResultsFileName: `performance-results_${new Date().getTime()}`,
                dropResultsFromFailedTest: false,
                performanceResultsDirectory: 'test-report/performance-results',
            },
        ],
    ],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
    before() {
        browser.setWindowSize(1280, 720);
    },
    afterTest: function (test: any, context: any, { error }: any) {
        if (error) {
            browser.takeScreenshot();
        }
    },
};
