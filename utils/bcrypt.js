const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';



bcrypt.hash(myPlaintextPassword, saltRounds);



bcrypt.compare(myPlaintextPassword, hash).then(function(result) {
    // result == true
});