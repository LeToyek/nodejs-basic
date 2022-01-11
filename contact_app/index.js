const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dirpath = './data'
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath)
}

const datapath = './data/contacts.json'
if (!fs.existsSync(datapath)) {
    fs.writeFileSync(datapath,'[]','utf-8')
}
