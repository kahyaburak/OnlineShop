const express = require("express");

const authController = require("../controller/auth.controller.js");

const router = express.Router();

router.get("/signup", authController.getSignup);
router.get("/login", authController.getLogin);

module.exports = router;
