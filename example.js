var encryption = require('./index');
encryption = encryption('kljhfeju453989fujhihu32y4923rfijhh384e92riijfhhgfu3y9u4ir90ufjhih2894r2');
let encrypt = encryption.encrypt('Hello There');
let decrypt = encryption.decrypt(encrypt);
console.log( encrypt );
console.log( decrypt );
console.log(encryption);