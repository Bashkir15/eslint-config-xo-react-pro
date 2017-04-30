# The React Styleguide for this config

## Sections
    1. [Basics](#basics)
    1. [Classes?](#when-to-use-class-vs-stateless-functional-components)
    1. [Naming](#naming)

## Basics
    - Only create one component per file.
        - This being said, multiple [Stateless, or Pure Components](https://facbook.github.io/react/docs/reusable-components.html#stateless-functions) are allow per file. See the eslint rule, 'react/no-multi-comp'
    - Always use JSX and prefer double-quotes to be inline with
    the standard of using double-quotes in html
    - Only write JSX in files with a JSX extension
    - Avoid using React.createElement or React.createClass unless you're initializing the application from a file that is not JSX.

## When to use Class vs stateless functional components?
    - If your component requires internal state, refs, or needs lifecycle methods, you should consider using `class Example extends React.Component` over `React.createClass` eslint[`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blog/master/docs/rules/prefer-es6-react/blob/master/rules/prefer-state-function.md)

    ```jsx

    // Incorrect
    const Example = React.createClass({
        // ...
        render() {
            return (
                <div>{this.state.info}</div>
            );
        }
    });

    // Prefered
    class Example extends React.Component {
        // ...
        render() {
            return (
                <div>{this.state.info}</div>
            );
        }
    }
    ```

    If your component doesn't need state, refs, or lifecycle methods you should probably use a stateless functional component:

    ```
    // Incorrect
    class Example extends React.Component {
        // ...
        render() {
            return (
                <div>{this.props.info}</div>
            );
        }
    }

    // Slightly better, but relying on function name inference can be problematic
    const Example = ({ info }) => (
        <div>{info}</div>
    );

    // Prefered
    function Example({ info }) {
        return (
            <div>
                {info}
            </div>
        );
    }
    ```

## Naming
    - **Extensions**: use `.jsx` for files that extend React or use JSX
    - **Filename**: This configuration doesn't enforce strict file naming, however the base xo configuration enforces kebab-case. Generally, this isn't the preferred method for naming React Components. Instead, you should use PascalCase for filenames. 'ExampleComponent.jsx'.
    - **Component Reference**: Use PascalCase for the actual React Components and then use then camelCase for the component instances. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blog/master/docs/rules/jsx-pascal-case.md)

    ``jsx
    // Incorrect
    import exampleComponent from './ExampleComponent';

    // Preferred
    import ExampleComponent from './ExampleComponent';

    // Incorrect
    const ExampleComponent = <ExampleComponent />;

    // Prefered
    const exampleComponent = <ExampleComponent />''