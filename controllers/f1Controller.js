const { FormulaOne } = require("../models/formulaone");
const { validationResult } = require("express-validator");

const controllers = {
  createDriverBySeason: async (req, res) => {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        const item = new FormulaOne(req.body);
        await item.save();
        res.status(201).json({ item });
      } else {
        res.status(501).json({ err });
      }
    } catch (error) {
      res.status(501).json({ msg: error });
    }
  },
  seeAll: async (req, res) => {
    const items = await FormulaOne.find();
    res.status(200).json(items);
  },

  seeDriverById: async (req, res) => {
    const item = await FormulaOne.findById(req.params.id);
    res.status(200).json({ item });
  },

  seeDriversBySeason: async (req, res) => {
    const items = await FormulaOne.find({ season: req.params.season });
    if (items.length > 0) {
      res.status(200).json(items);
    } else {
      res.status(200).json({
        msg: `No hay registros para la temporada ${req.params.season}`,
      });
    }
  },
  editDriverById: async (req, res) => {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        item = await FormulaOne.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({
          msg: `Se actualizo el item con id ${req.params.id}`,
          de: item,
          a: req.body,
        });
      } else {
        res.status(501).json({ err });
      }
    } catch (error) {
      res.status(501).json({ msg: error });
    }
  },
  deleteDriverById: async (req, res) => {
    try {
      const driver = await FormulaOne.findByIdAndDelete(req.params.id);
      res
        .status(202)
        .json({ msg: "el siguiente piloto fue eliminado", driver });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  },
};

module.exports = controllers;
