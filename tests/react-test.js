import test from 'tape';
import { CLIEngine } from 'eslint';
import eslintrc from '../';
import reactRules from '../configs/react/base';
import a11yRules from '../configs/react/a11y';

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
            /* eslint class-methods-use-this: 0, import/no-unresolved: 0, import/extensions: 0 */
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
            setThing() {}
            getThing() {}
            setBar() {}
            funMethod() {}
            conditionalRender() {}
            render() { return <p />; }
        `));

        t.notOk(result.warningCount, 'no warnings');
        t.notOk(result.errorCount, 'no-errors');
        t.deepEquals(result.messages, [], 'no messages');
    });

    t.test('test the order when random method is first', (t) => {
        t.plan(2);
        const result = lint(Component(`
            funMethod() {}
            componentWillMount() {}
            componentDidMount() {}
            setThing() {}
            getThing() {}
            setStuff() {}
            renderHouse() {}
            render() { return <span />; }
        `));

        t.ok(result.errorCount, 'fails');
        t.equal(result.messages[0].ruleId, 'react/sort-comp',' fails due to sorting');
    });

    t.test('test the order when random method comes after the lifecycle', (t) => {
        t.plan(2);
        const result = lint(Component(`
            componentWillMount() {}
            componentDidMount() {}
            funMethod() {}
            setThing() {}
            getThing() {}
            setStuff() {}
            renderHouse() {}
            render() { return <span />; }
        `));

        t.ok(result.errorCount, 'fails');
        t.equal(result.messages[0].ruleId, 'react/sort-comp', 'fails due to sorting');
    });
});