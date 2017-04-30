module.exports = {
    extends: [
        './errors',
        './vars',
        './es-plus',
        './imports',
        './opinions',
        './stylish',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {},
};