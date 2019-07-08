const config = {
    "extends": "airbnb-base",
    "parser": "babel-eslint"
};

config.rules = {
    ...config.rules,
    'prefer-destructuring': 'warn',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
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

module.exports = config;
