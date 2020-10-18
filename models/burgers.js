const { request } = require("express");
const orm = require("../config/orm");

const burger = {
    selectAll(cb) {
        orm.selectALL('burgers', (results) => {
            cb(results);
        });
    },

    updateOne(condition, cb) {
        orm.updateOne(condition, (result) => {
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