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
            'warn',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            }
        ],

        'arrow-parens': ['error', 'as-needed', {
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

        'no-class-assign': 'warn',

        'no-confusing-arrow': ['warn', {
            allowParens: true,
        }],

        'no-const-assign': 'error',

        'no-dupe-class-members': 'error',

        'no-duplicate-imports': 'off',

        'no-restricted-imports': 'off',

        'no-this-before-super': 'error',

        'no-useless-computed-key': 'error',

        'no-useless-constructor': 'warn',

        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],

        'no-var': 'error',

        'object-shorthand': ['warn', 'always', {
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
        'template-curly-spacing': 'error',
        'yield-star-spacing': ['error', 'after']
    }
};