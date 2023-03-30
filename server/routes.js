const router = require("express").Router();

router.use("/calendar", require("./calendar/calendarRoutes"));
router.use("/user", require("./user/userRoutes"));

module.exports = router;
