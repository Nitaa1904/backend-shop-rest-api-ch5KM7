const router = require("express").Router();

const authController = require("../controllers/authController");

// 41. API login
router.post("/login", authController.login);
// router.post("", shopController.createShop);
// router.get("", shopController.getAllShop);
// router.get("/:id", shopController.getShopById);
// router.patch("/:id", shopController.updateShop);
// router.delete("/:id", shopController.deleteShop);

module.exports = router;
