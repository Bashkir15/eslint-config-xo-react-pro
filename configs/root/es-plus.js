module.exports = {
    env: {
        es6: true
    },

    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            generators: true,
            objectLiteralDuplicateProperties: true,
        }
    },

    rules: {
        'arrow-body-style': [
            'error',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            }
        ],

        'arrow-parents': ['error', 'as-needed', {
            requireForBlockBody: true,
        }],

        'arrow-spacing': ['error', {
            before: true,
            after: true,
        }],

        'constructor-super': 'error',
        'generator-star-spacing': ['error', {
            before: false,
            after: true,
        }],

        'no-class-assign': 'error',

        'no-confusing-arrow': ['error', {
            allowParens: true,
        }],

        'no-const-assign': 'error',

        'no-dupe-class-members': 'error',

        'no-duplicate-imports': 'off',

        'no-restricted-imports': 'off',

        'no-this-before-super': 'error',

        'no-useless-computed-key': 'error',

        'no-useless-constructor': 'error',

        'no-useless-rename': ['error', 'always', {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],

        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],

        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],

        'prefer-destructuring': ['warn', {
            array: true,
            object: true,
        }, {
            enforceForRenamedProperties: false,
        }],

        'prefer-numeric-literals': 'warn',

        'prefer-reflect': 'off',

        'prefer-rest-params': 'error',

        'prefer-spread': 'error',

        'prefer-template': 'error',

        'require-yield': 'error',

        'rest-spread-spacing': ['error', 'never'],

        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],

        'symbol-description': 'error',
        'template-curcly-spacing': 'error',
        'yield-star-spacing': ['error', 'after']
    }
};