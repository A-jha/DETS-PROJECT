const { Router } = require("express");

const noticeController = require("../controller/noticeController");

const router = Router();

router.get("/", (req, res) => {
  res.send("All Notice will be here");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("here we will post notice");
});

router.put("/", (req, res) => {
  console.log(req.body);
  res.send("here we will update notice");
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  res.send("Here we will delete");
});

module.exports = router;
