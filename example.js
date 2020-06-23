var encryption = require('./index');
encryption = encryption('ijfshd8239910--1i3uer');
let encrypt = encryption.encrypt('Hello There');
let decrypt = encryption.decrypt(encrypt);
console.log( encrypt );
console.log( decrypt );