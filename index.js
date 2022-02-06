#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome')

// clears the console
welcome({
    title: pkgJSON.name,
    tagLine: 'Get to know Michael',
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: '#78A9C9',
    // color: '#78A9C9',
    bold: true,
    clear: true
})

console.log(`
Michael LaRoy
CEO Cascadia Digital

🐦  Twitter: https://twitter.com/laroymike
📖  Github: https://github.com/mlaroy
🖥️   Blog: https://mikelaroy.ca

`);
