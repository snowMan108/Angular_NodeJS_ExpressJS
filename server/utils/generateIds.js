const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
require('dotenv').config({ path: 'config/variables.env' });

module.exports.generateId = () => {
    var datetime = new Date();
    var id = datetime.getTime() + (Math.random() * Math.pow(36, 6) | 0).toString(36);
    var hashDigest = sha256(id);
    var myid = hmacSHA512(hashDigest, process.env.SECRET_ID).toString();
    return myid;
}