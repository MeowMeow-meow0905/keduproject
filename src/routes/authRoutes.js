const express = require("express");
const router = express.Router();

// ȸ������ ������ ������
router.get("/register", (req, res) => {
    res.render("register");
});

// �α��� ������ ������
router.get("/login", (req, res) => {
    res.render("login");
});

// ���̵� ã�� ������ ������
router.get("/find-id", (req, res) => {
    res.render("findId");
});

// ��й�ȣ ã�� ������ ������
router.get("/find-password", (req, res) => {
    res.render("findPassword");
});

module.exports = router;
