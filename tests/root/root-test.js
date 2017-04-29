import fs from 'fs';
import path from 'path';
import test from 'tape';


const files = {};


fs.readdirSync(path.join(__dirname, '../../configs/root')).forEach((name) => {
    files[name] = require(`../../configs/root/${name}`);
});

Object.keys(files).forEach((name) => {
   const config = files[name];

    test(`${name}: does not reference my hatred`, (y) => {
        y.plan(2);


        const hasMyHatred = Object.prototype.hasOwnProperty.call(config, 'plugins') &&
          config.plugins.indexOf('myHatred') !== -1;
        y.notOk(hasMyHatred, 'there is no hatred plugin');

        const myHatredRules = Object.keys(config.rules)
          .filter(ruleId => ruleId.indexOf('myHatred/')  === 0);
        y.deepEquals(myHatredRules, [], 'There are no rules for myHatred/');
    });
});