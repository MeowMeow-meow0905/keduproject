const express = require("express");
const router = express.Router();

// 회원가입 페이지 렌더링
router.get("/register", (req, res) => {
    res.render("register");
});

// 로그인 페이지 렌더링
router.get("/login", (req, res) => {
    res.render("login");
});

// 아이디 찾기 페이지 렌더링
router.get("/find-id", (req, res) => {
    res.render("findId");
});

// 비밀번호 찾기 페이지 렌더링
router.get("/find-password", (req, res) => {
    res.render("findPassword");
});

module.exports = router;
