'use strict' 


function getOption(req, res) {
    
    var cpuopt = Math.floor(Math.random() * (3));

    res.status(200).send({
        cpuopt
    });
}

module.exports = {
   getOption
}