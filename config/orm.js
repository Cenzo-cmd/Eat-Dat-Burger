const connection = require('./connection');

const orm = {
    selectALL: (tableInput, cb) => {
        const queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, (error, result) => {
            if (error) throw error;
            cb(result);
        });
    },

    updateOne: (condition, value, cb) => {
        const queryString = `UPDATE burgers SET devoured = ${value} WHERE ?`;
        connection.query(queryString, [condition], (error, result) => {
            if (error) throw error;
            cb(result);
        });
    },

    insertOne: (name, cb) => {
        const queryString = `INSERT INTO burgers (burger_name) VALUES ("${name}")`;
        connection.query(queryString, (error, result) => {
            if (error) throw error;
            cb(result);
        });
    },

    deleteOne: (condition, cb) => {
        const queryString = `DELETE FROM burgers WHERE ?`;
        connection.query(queryString, [condition], (error, result) => {
            if (error) throw error;
            cb(result);
        });
    }
};

module.exports = orm;