const mongoose= require('mongoose');
mongoose.set('strictQuery',false);
const DB ='mongodb://localhost:27017/Testdb';
;
//CONNECTION
mongoose.connect(DB, {
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection`));