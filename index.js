module.exports = {
    parser: "babel-eslint",
    extends: [
        './configs/root/root',
        './configs/react/base',
        './configs/react/a11y',
    ].map(require.resolve),
    globals: {
        "document": true,
        "window": true,
    },
    rules: {}
};