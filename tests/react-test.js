import test from 'tape';
import { CLIEngine } from 'eslint';
import eslintrc from '../';
import reactRules from '../configs/react/base';

const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: eslintrc,
});

function lint(text) {
    const linter = cli.executeOnText(text);
    return linter.results[0];
}

function Component(body) {
    return `
        import React from 'react';
        export default class TestComponent extends React.Component {
            /* eslint class-methods-use-this: 0 */
            ${body}
        }
    `;
}

test('validate the react prop order', (t) => {
    t.test('Check that lint has React and jsx', (t) => {
        t.plan(1);
        t.deepEquals(reactRules.plugins, ['react']);
    });

    t.test('passes component properly', (t) => {
        t.plan(3);
        const result = lint(Component(`
            componentWillMount() {}
            componentDidMount() {}
            setFoo() {}
            getFoo() {}
            setBar() {}
            funMethod() {}
            conditionalRender() {}
            render() { return <p />; }
        `));

        t.notOk(result.warningCount, 'no warnings');
        t.notOk(result.errorCount, 'no-errors');
        t.deepEquals(result.messages, [], 'no messages');
    });
});