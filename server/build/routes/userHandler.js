"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    console.log("Hello node");
    res.send('Hello World 3!');
});
exports.default = router;
