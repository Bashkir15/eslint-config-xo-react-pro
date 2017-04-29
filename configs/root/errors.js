module.exports = {
    rules: {
        'comma-dangle': [
            'error', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            }
        ],

        'no-await-in-loop': "error",

        'no-compare-neg-zero': 'off',

        'no-cond-assign': ['warn', 'always'],

        'no-console': 'off',

        'no-constant-condition': 'warn',

        'no-control-regex': 'error',

        'no-dupe-args': 'error',

        'no-dupe-keys': 'error',

        'no-duplicate-case': 'error',

        'no-empty': 'error',

        'no-empty-character-class': 'warn',

        'no-ex-assign': 'error',

        'no-extra-boolean-cast': 'warn',

        'no-extra-parents': ['off', 'all', {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
        }],

        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'warn',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': "error",
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-negated-in-1hs': 'off',
        'use-isnan': 'warn',
        'valid-jsdocs': 'off',
        'valid-typeof': ['error', {
            requireStringLiterals: true
        }],

    }
};