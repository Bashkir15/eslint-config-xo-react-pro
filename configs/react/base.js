module.exports = {
    plugins: [
        'react',
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    ecmaFeatures: {
        jsx: true,
    },

    rules: {
        // Determine whether double or single quotes should be used in JSX
        // Double by default to fit inline with standard HTML double quotes
        'jsx-quotes': ['error', 'prefer-double'],

        // Requires the use of explicit context inside of methods methods
        // React component lifecycles are an exception by default
        'class-methods-use-this': ['warn', {
            exceptMethods: [
                'render',
                'getInitialState',
                'getDefaultProps',
                'getChildContext',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
            ],
        }],

        

        // Enforces boolean attributes notation in JSX
        // propName={true} vs. propName
        'react/jsx-boolean-value': ['error', 'never'],

        // Validate where the closing bracket location falls for jsx
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

        // Validates curly spacing in JSX, default no spaces between props curly braces
        'react/jsx-curly-spacing': ['error', 'never', {
            allowMultiline: true
        }],

        // Enforces spaces in props propName = {prop} vs propName={prop}
        // Second prefered for style reasons
        'react/jsx-equals-spacing': ['error', 'never'],

        // Enforces jsx to only be written in files with a .jsx extension
        'react/jsx-filename-extension': ['error', {
            extensions: ['.jsx'],
        }],


        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-handler-names': ['off', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
        }],
        'react/jsx-indent': ['off', 4]
        'react/jsx-indent-props': ['off', 4],
        'react/jsx-key': 'warn',
        'react/jsx-max-props-per-line': ['off', {
            maximum: 1,
            when: 'multiline'
        }],
        'react/jsx-no-bind': ['error', {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowBind: false,
        }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': ['error', {
            ignoreCase: true,
        }],
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': ['error', {
            allowAllCaps: false,
            ignore: [],
        }],
        'react/jsx-sort-prop-types': 'off',
        'react/jsx-sort-props': ['off', {
            ignoreCase: true,
            callbacksLast: false,
            shorthandFirst: false,
            shorthandLast: false,
            noSortAlphabetically: false,
        }],
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
        }],
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': 'error',
        'react/jsx-space-before-closing': ['error', 'always'],
        'react/jsx-wrap-multilines': ['error', {
            declaration: true,
            assignment: true,
            return: true,
        }],
   


        'react/display-name': ['off', {
            ignoreTranspilerName: false,
        }],
        'react/forbid-component-props': ['off', {
            forbid: [],
        }],
        'react/forbid-elements': ['off', {
            forbid: [],
        }],
        'react/forbid-foreign-prop-types': 'off',
        'react/forbid-prop-types': ['off', {
            forbid: ['any', 'array', 'object'],
        }],
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'off',
        'react/no-comment-textnodes': 'off',
        'react/no-danger': 'warn',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': ['error'],
        'react/no-did-mount-set-state': ['error'],
        'react/no-did-update-set-state': ['error'],
        'react/no-direct-mutation-state': 'warn',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['error', {
            ignoreStateless: true,
        }],
        'react/no-render-return-value': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unused-prop-types': ['error', {
            customValidators: [],
            skipShapeProps: true,
        }],
        'react/require-optimization': ['off', {
            allowDecorators: [],
        }],
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-unknown-property': 'error',
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-stateless-function': ['error', {
            ignorePureComponents: true,
        }],
        'react/prop-types': ['error', {
            ignore: [],
            customValidators: [],
            skipUndeclared: false,
        }],
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'off',
        'react/require-extension': ['off', {
            extensions: ['.jsx', '.js'],
        }],
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': ['error', {
            order: [
                'static-methods',
                'lifecycle',
                '/^on.+$/',
                '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                'everything-else',
                '/^render.+$/',
                'render',
            ],
        }],
        'react/sort-prop-types': ['off', {
            ignoreCase: true,
            callbacksLast: false,
            requiredFirst: false,
        }],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'off',
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json'],
            },

            webpack: {
                extensions: ['.js', '.jsx', '.json', '.css', '.sass', '.json'],
            }
        },

        react: {
            pragma: 'React',
        },
    }
};