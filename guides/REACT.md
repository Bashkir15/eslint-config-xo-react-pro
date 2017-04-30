
# The xo-react-pro style guide

*A simple an reasonable approach to React and JSX*

## Contents

  1. [Basics](#basics)
  1. [When to use classes](#when-to-use-class-vs-stateless-functional-components)

## Basic Rules

  - Only create one component per file.
    - This being said, multiple [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) are allowed per file. See the eslint rule: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - Always use JSX and prefer double-quotes to be inline with the standard of using double-quotes in html.
  - Only write JSX in files with a JSX extensions
  - Avoid using `React.createElement` or `React.createClass` unless you're initializing the app from a file that is not JSX.

## When to use Class vs stateless functional components

  - If your component requires internal state, refs, or needs lifecycle methods, you should consider using `class extends React.Component` over `React.createClass`. eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

    ```jsx
    // Incorrect
    const Example = React.createClass({
      // ...
      render() {
        return (
            <div>
                {this.state.info}
            </div>
        );
      }
    });

    // Preferred
    class Example extends React.Component {
      // ...
      render() {
        return (
            <div>
                {this.state.info}
            </div>
        );
      }
    }
    ```

    If your component doesn't need state, refs, or licecycle methods you should probably use a stateless functional component:

    ```jsx
    // Incorrect
    class Example extends React.Component {
      render() {
        return (
            <div>
                {this.props.info}
            </div>
        );
      }
    }

    // Slightly better, but relying on function name inference can be problematic
    const Example = ({ info }) => (
      <div>{info}</div>
    );

    // Preferred
    function Listing({ info }) {
      return (
        <div>
            {info}
        </div>
      );
    }
    ```
