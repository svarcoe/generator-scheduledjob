'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-scheduledjob:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments('test.myproject');
  });

  it('creates files', () => {
    assert.file(['test.myproject.csproj', 'Program.cs']);
  });
});
