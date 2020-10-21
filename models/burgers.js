const { request } = require("express");
const orm = require("../config/orm");

const burger = {
    selectAll(cb) {
        orm.selectALL('burgers', (results) => {
            cb(results);
        });
    },

    updateOne(condition, value, cb) {
        orm.updateOne(condition, value, (result) => {
            cb(result);
        });
    },

    insertOne(name, cb) {
        orm.insertOne(name, (result) => {
            cb(result);
        });
    },

    deleteOne(condition, cb) {
        orm.deleteOne(condition, (result) => {
            cb(result);
        });
    }
};

module.exports = burger;