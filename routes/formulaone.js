const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const f1controllers = require("../controllers/f1Controller");
const { validateIdf1, validateSeason } = require("../middlewares/validations");

router.get("/seeall", f1controllers.seeAll);

router.get("/driver/:id", validateIdf1, f1controllers.seeDriverById);

router.get(
  "/drivers/:season",
  validateSeason,
  f1controllers.seeDriversBySeason
);

router.post(
  "/newdriverbyseason",
  [
    check("driver.firstname")
      .not()
      .isEmpty()
      .withMessage("Debes ingresar el nombre del piloto")
      .isLength({ min: 3 })
      .withMessage("Debe tener al menos 3 caracteres"),
  ],
  [
    check("driver.lastname")
      .not()
      .isEmpty()
      .withMessage("Debes completar el apellido del piloto")
      .isLength({ min: 3 })
      .withMessage("Debe tener al menos 3 caracteres"),
  ],
  [
    check("season")
      .not()
      .isEmpty()
      .withMessage("Debe ingresar la temporada")
      .isNumeric()
      .withMessage("Debe ser un número")
      .isLength({ min: 4, max: 4 })
      .withMessage("Debe tener 4 dígitos el año")
      .isNumeric({ min: 1950 })
      .withMessage("Debe ser mayor a 1949"),
  ],
  [
    check("team")
      .not()
      .isEmpty()
      .withMessage("Debe completar la escuderia")
      .isLength({ min: 3 })
      .withMessage("Debe tener al menos 3 caracteres"),
  ],
  [
    check("wins")
      .not()
      .isEmpty()
      .withMessage("Debe completar la cantidad de victorias")
      .isNumeric()
      .withMessage("Debe ser un número")
      .isLength({ max: 2 })
      .withMessage("No puede ser mayor a 99"),
  ],
  [
    check("points")
      .not()
      .isEmpty()
      .withMessage("Debe completar la cantidad de puntos")
      .isNumeric()
      .withMessage("Debe ser un número")
      .isLength({ max: 5 })
      .isFloat({ max: 600.0 })
      .withMessage("No puede ser mayor a 600"),
  ],
  [
    check("champion")
      .not()
      .isEmpty()
      .withMessage("Debe completar si el piloto fue campeón")
      .isBoolean()
      .withMessage("Debes completar con true o false"),
  ],
  f1controllers.createDriverBySeason
);

router.put(
  "/editdriver/:id",
  [
    check("driver.firstname")
      .not()
      .isEmpty()
      .withMessage("Debes ingresar el nombre del piloto")
      .isLength({ min: 3 })
      .withMessage("Debe tener al menos 3 caracteres"),
  ],
  [
    check("driver.lastname")
      .not()
      .isEmpty()
      .withMessage("Debes completar el apellido del piloto")
      .isLength({ min: 3 })
      .withMessage("Debe tener al menos 3 caracteres"),
  ],
  [
    check("season")
      .not()
      .isEmpty()
      .withMessage("Debe ingresar la temporada")
      .isNumeric()
      .withMessage("Debe ser un número")
      .isLength({ min: 4, max: 4 })
      .withMessage("Debe tener 4 dígitos el año")
      .isNumeric({ min: 1950 })
      .withMessage("Debe ser mayor a 1949"),
  ],
  [
    check("team")
      .not()
      .isEmpty()
      .withMessage("Debe completar la escuderia")
      .isLength({ min: 3 })
      .withMessage("Debe tener al menos 3 caracteres"),
  ],
  [
    check("wins")
      .not()
      .isEmpty()
      .withMessage("Debe completar la cantidad de victorias")
      .isNumeric()
      .withMessage("Debe ser un número")
      .isLength({ max: 2 })
      .withMessage("No puede ser mayor a 99"),
  ],
  [
    check("points")
      .not()
      .isEmpty()
      .withMessage("Debe completar la cantidad de puntos")
      .isNumeric()
      .withMessage("Debe ser un número")
      .isLength({ max: 5 })
      .isFloat({ max: 600.0 })
      .withMessage("No puede ser mayor a 600"),
  ],
  [
    check("champion")
      .not()
      .isEmpty()
      .withMessage("Debe completar si el piloto fue campeón")
      .isBoolean()
      .withMessage("Debes completar con true o false"),
  ],
  validateIdf1,
  f1controllers.editDriverById
);

router.delete(
  "/deletedriver/:id",
  validateIdf1,
  f1controllers.deleteDriverById
);

module.exports = router;
