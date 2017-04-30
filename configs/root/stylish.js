module.exports = {
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: true,
        }],
        'camelcase': ['error', {
            properties: 'never',
        }],
        'capitalized-comments': ['off', 'never', {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },

            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        }],
        'comma-spacing': ['error', {
            before: false,
            after: true,
        }],
        'comma-style': ['error', 'last'],
        'func-call-spacing': ['error', 'never'],
        'max-len': ['error', 100, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'object-curly-spacing': ['error', 'always'],
    }
};