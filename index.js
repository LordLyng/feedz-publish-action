const fs = require('fs'),
    core = require('@actions/core'),
    github = require('@actions/github'),
    spawnSync = require('child_process').spawnSync;

_executeCommand = (cmd, options) => {
    console.log(`executing: [${cmd}]`)

    const INPUT = cmd.split(" "), TOOL = INPUT[0], ARGS = INPUT.slice(1)
    return spawnSync(TOOL, ARGS, options)
}

const pushCmd = `feedz`;
console.log(this._executeCommand(pushCmd, { encoding: "utf-8" }).stdout);