'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('projectName', {
      desc: 'Name of project',
      required: true
    });
  }

  configuring() {
    this.config.save();
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the delightful ' + chalk.red('generator-scheduledjob') + ' generator!'
      )
    );

    const prompts = [
      // {
      //   type: 'input',
      //   name: 'projectName',
      //   message: 'Your project name',
      //   default: path.basename(process.cwd())
      // }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('templates.csproj'),
      this.destinationPath(this.options.projectName + '.csproj')
    );
    this.fs.copyTpl(this.templatePath('Program.cs'), this.destinationPath('Program.cs'), {
      projectName: this.options.projectName
    });
  }

  install() {
    this.spawnCommand('dotnet', ['build']);
  }
};
