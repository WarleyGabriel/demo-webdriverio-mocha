module.exports = {
    rules: {
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
    },
    globals: {
        browser: true,
        $: true,
        $$: true,
    },
    env: {
        mocha: true,
    },
    extends: [
        'airbnb-base',
    ]
};
