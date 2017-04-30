module.exports = {
    extends: [
        './configs/root/root',
        './configs/react/base',
        './configs/react/a11y',
    ].map(require.resolve),
    rules: {}
};