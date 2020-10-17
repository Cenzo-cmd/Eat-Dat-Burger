const connection = require('./connection');

const orm = {
    selectALL: (tableInput, cb) => {
        const queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, (error, result) => {
            if (error) throw error;
            cb(result);
        })
    },

    updateOne: (condition, cb) => {
        const queryString = `UPDATE burgers SET devoured = true WHERE ?`;

        connection.query(queryString, [condition], (error, result) => {
            if (error) throw error;
            cb(result);
        })
    },

    insertOne: 'inser one here',


};

module.exports = orm;