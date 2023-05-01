const router = require("express").Router();

router.use("/calendar", require("./calendar/calendarRoutes"));
router.use("/user", require("./user/userRoutes"));
router.use("/activities", require("./activity/activityRoutes"));
router.use("/meals", require("./meal/mealRoutes"));
router.use("/symptoms", require("./symptom/symptomRoutes"));
router.use("/menstruation", require("./menstruation/menstruationRoutes"));

module.exports = router;
