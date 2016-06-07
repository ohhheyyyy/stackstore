'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');

module.exports = function(db){
	db.define('reviews', {
		title: {
			type: Sequelize.STRING
		},
		stars: {
			type: Sequelize.INTEGER,
			validate: {
				max: 5 //might be unnecessary depending on the form
			}
		},
		text: {
			type: Sequelize.TEXT
		},
		helpful: {
			type: Sequelize.BOOLEAN
		}
	})
};