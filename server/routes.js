const router = require("express").Router();
const auth = require("./middleware/auth");

router.use("/calendar", require("./calendar/calendarRoutes"));
router.use("/user", require("./user/userRoutes"));

module.exports = router;
