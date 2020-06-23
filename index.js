const crypto = require('crypto');
//Example From: https://gist.github.com/vlucas/2bd40f62d20c1d49237a109d491974eb
var config = {};
var encrypt = ( data )=>{
    try{
        let iv = crypto.randomBytes(16);
        let cipher = crypto.createCipheriv('aes-256-cbc', config.privateKey, iv);
        let encrypted = cipher.update( data );
        encrypted = Buffer.concat([ encrypted, cipher.final() ]);
        return iv.toString('hex')+":"+encrypted.toString('hex');
    }catch(err){
        throw err;
    }
}
var decrypt = ( data )=>{
    try{
        let array = data.split(':');
        let iv = Buffer.from( array.shift(), 'hex' );
        let decipher = crypto.createDecipheriv('aes-256-cbc', config.privateKey, iv );
        let decrypted = decipher.update( Buffer.from( array.join(':'), 'hex' ) );
        decrypted = Buffer.concat( [decrypted, decipher.final()] );
        return decrypted.toString();
    }catch( err ){
        throw "Wrong_Password";
    }
}
module.exports = (key=null)=>{
    if( key == null ){
        config.privateKey = crypto.scryptSync( '', 'salt', 32 );
    } else {
        config.privateKey = crypto.scryptSync( key, 'salt', 32 );
    }
    config.privateKey = Buffer.from( config.privateKey );
    return {decrypt, encrypt, 'key':config.privateKey};
}