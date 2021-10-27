const { Router } = require("express");

const noticeController = require("../controller/noticeController");

const router = Router();

router.get("/", noticeController.notice_get);

router.post("/", noticeController.notice_post);

router.put("/:id", noticeController.notice_update);

router.delete("/:id", noticeController.notice_delete);

module.exports = router;
