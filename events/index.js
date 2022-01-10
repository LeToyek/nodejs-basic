const{ EventEmitter } = require('events');

const birthdayEventListener = (name) => {
    console.log(`happy birthday ${name}!`);
}
const myEventEmitter = new EventEmitter()

myEventEmitter.on('birthday', birthdayEventListener)

myEventEmitter.emit('birthday','Toyek')