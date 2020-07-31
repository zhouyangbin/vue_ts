let process = require("child_process");
process.exec('cp -r dist ../', function(err) {
    if (err == null) {
        console.log('copy success')
    } else {
        console.log('copy fall')
    }
})