module.exports = {
    extends: [
        './configs/root/root',
        './configs/react/base'
    ].map(require.resolve),
    rules: {}
};