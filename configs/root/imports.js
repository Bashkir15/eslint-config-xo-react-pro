module.exports = {
    env: {
        es6: true,
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },

    plugins: [
        'import',
    ],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.json']
            }
        },

        'import/extensions': [
            '.js',
            '.jsx',
        ],

        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee||scss|css|less|hbs|svg|json)$',
        ],
    },

    rules: {
        'import/no-unresolved': ['error', {
            commonjs: true,
            caseSensitive: true,
        }],
        'import/named': 'off',
        'import/default': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'error',
        'import/first': ['error', 'absolute-first'],
        'import/imports-first': 'off',
        'import/no-duplicates': 'error',
        'import/no-namespace': 'off',
        'import/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
        }],
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'warn',
        'import/no-restricted-paths': 'off',
    }
};