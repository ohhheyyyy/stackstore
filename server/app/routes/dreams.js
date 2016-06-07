'use strict';

const express = require('express');
const router = express.Router();

var Dream = require('../../db').model('dream');
module.exports = router;

router.get('/', function(req, res, next) {
    Dream.findAll({ where: req.query })
        .then(function(dreams) { 
        	res.json(dreams);
        })
        .catch(next);
});

