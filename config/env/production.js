'use strict';
module.exports = {
    db: process.env.MONGO_URI || 'mongodb://localhost/aurea',
    app: {
        name: 'Aurea: un registro elettronico aperto - Production'
    },
    mailer: {
        host: '',
        port: 25,
        secureConnection: false,
        name: 'Aurea',
        auth: {
            user: '',
            pass: ''
        },
        maxConnections: 5
    }
};
