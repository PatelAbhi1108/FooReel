const express = require('express');
const authController = require("../controllers/auth.controller")

const router = express.Router();

// user auth APIs
router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/logout', authController.logoutUser)



// food partner auth APIs
router.post('/food-partner/register', authController.registerFoodPartner)
router.post('/food-partner/login', authController.loginFoodPartner)
router.get('/food-partner/logout', authController.logoutFoodPartner)

res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'none',  // ← must be 'none' for cross-domain
    secure: true       // ← must be true when sameSite is 'none'
})



module.exports = router;