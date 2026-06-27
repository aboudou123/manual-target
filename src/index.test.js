const test = require('node:test');
const assert = require('node:assert');
const app = require('./index');

test('app is defined', () => { assert.ok(app); });