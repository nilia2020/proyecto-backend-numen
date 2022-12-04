const { User } = require("../models/users");
const { FormulaOne } = require("../models/formulaone");

const validateId = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user !== null) {
      next();
    } else {
      res
        .status(404)
        .json({ msg: "El id ingresado no se encuentra en la base de datos." });
    }
  } catch (error) {
    res.status(400).json({
      msg: "El formato de id ingresado es inválido, revíselo y vuelva a intentarlo",
      error,
    });
  }
};

const validateIdf1 = async (req, res, next) => {
  try {
    const user = await FormulaOne.findById(req.params.id);
    if (user !== null) {
      next();
    } else {
      res
        .status(404)
        .json({ msg: "El id ingresado no se encuentra en la base de datos." });
    }
  } catch (error) {
    res.status(400).json({
      msg: "El formato de id ingresado es inválido, revíselo y vuelva a intentarlo",
      error,
    });
  }
};

const validateSeason = async (req, res, next) => {
  try {
    const user = await FormulaOne.find({ season: Number(req.params.season) });
    if (user !== null) {
      next();
    } else {
      res
        .status(404)
        .json({ msg: "La temporada ingresada no existe en los registros" });
    }
  } catch (error) {
    res.status(400).json({
      msg: "El formato de temporada ingresada no es válido, revíselo y vuelva a intentarlo",
      error,
    });
  }
};

module.exports = { validateId, validateSeason, validateIdf1 };
