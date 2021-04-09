const express = require("express");
const bootcampControllers = require("../controllers/bootcampControllers");
const router = express.Router();

// @route - /api/v1/bootcamps/
router
  .route("/")
  .get(bootcampControllers.getAllBootcamps)
  .post(bootcampControllers.createNewBootcamp);

// @route - /api/v1/bootcamps/someid
router
  .route("/:id")
  .put(bootcampControllers.updateBootcampById)
  .delete(bootcampControllers.deleteBootcampById);

module.exports = router;
