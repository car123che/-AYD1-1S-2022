var fs = require ('fs');
var path = require('path');

exports.helloWorld = async (req, res) => {
    return res.status(200).send({
        status: 'success',
        message: 'Esta es el mensaje del BUGFIX'
    })
}