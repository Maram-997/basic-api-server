'use strict';

const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";
const { Sequelize, DataTypes } = require('sequelize');
const Food = require('./food');
const Clothes = require('./clothes');


var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    Food: Food(sequelize, DataTypes),
    Clothes: Clothes(sequelize, DataTypes),

}