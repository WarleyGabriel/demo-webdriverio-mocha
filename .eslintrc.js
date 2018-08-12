const {baseConfig} = require('@bayon/eslint-config-base');

const config = baseConfig();

config.rules = {
    ...config.rules,
    'prefer-destructuring': 'warn',
    'no-magic-numbers': ['error', {
        ignore: [0, 1, 2, 1000],
        ignoreArrayIndexes: true,
        enforceConst: true,
    }],
};

config.globals = {
    ...config.globals,
    browser: true,
    $: true,
};

config.env = {
    ...config.env,
    mocha: true,
};

config.overrides.push({
    files: [
        'wdio.conf.js',
    ],
    rules: {
        'global-require': 'off',
    }
});

module.exports = config;
