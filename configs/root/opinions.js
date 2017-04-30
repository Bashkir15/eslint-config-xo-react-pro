module.exports = {
    rules: {
        'accessor-pairs': 'off',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': ['error', {
            exceptMethods: [],
        }],
        'consistent-return': 'error',
        'default-case': ['error', {
            commentPattern: '^no default$',
        }],
        'dot-notation': ['error', {
            allowKeywords: true,
        }],
        'global-require': 'warn',
        'guard-for-in': 'error',
        'no-alert': 'warn',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'off',
        'no-else-return': 'error',
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ],
        }],
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        }],
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': ['error', {
            allowLoop: false,
            allowSwitch: false,
        }],
        'no-lone-blocks': 'error',
        'no-loop-func': 'warn',
        'no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'acc',
                'e',
                'ctx',
                'req',
                'res',
                'response',
                '$scope',
            ],
        }],
        'no-proto': 'warn',
        'no-redeclare': 'error',
        'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated'
        }, {
            property: '__defineGetter__',
            message: 'Deprecated, use Object.defineProperty instead',
        }, {
            property: '__defineSetter__',
            message: 'Deprecated, use Object.defineProperty instead',
        }, {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operater (**) instead',
        }],
        'no-underscope-dange': 'off',
        strict: ['error', 'never'],
    }
};