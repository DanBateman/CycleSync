const router = require("express").Router();

router.use("/calendar", require("./calendar/calendarRoutes"));

module.exports = router;
