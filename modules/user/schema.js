'use strict';

const Schema = require('mongoose').Schema;

module.exports = new Schema({
    name: String,
    modules: Schema.Types.Mixed
});
