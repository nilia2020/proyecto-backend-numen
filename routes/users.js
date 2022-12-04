const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const authSession = require("../middlewares/authSession");
const authJWT = require("../middlewares/authJWT");
const { check } = require("express-validator");
const { validateId } = require("../middlewares/validations");

//REGISTRARSE
router.post(
  "/signup",
  [
    check("username.firstname")
      .not()
      .isEmpty()
      .withMessage("Debes ingresar tu nombre"),
    check("username.lastname")
      .not()
      .isEmpty()
      .withMessage("Debes ingresar tu apellido"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Debes ingresar un email")
      .isEmail()
      .withMessage("Debes ingresar un formato de email válido"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Debes ingresar una contraseña")
      .isLength({ min: 8, max: 12 })
      .withMessage("La contraseña debe contener entre 8 a 12 caracteres."),
  ],
  controller.signup
);

/* VER TODOS */
router.get("/users", authSession, authJWT, controller.allUsers);

/* VER UNO */
router.get("/users/:id", authSession, authJWT, validateId, controller.userById);

/* EDITAR */
router.put(
  "/editPassword/:id",
  authSession,
  authJWT,
  validateId,
  [
    check("password")
      .not()
      .isEmpty()
      .withMessage("El campo esta vacio")
      .isLength({ min: 8, max: 12 })
      .withMessage("La contraseña debe contener entre 8 y 12 caracteres."),
  ],
  controller.editPassword
);

/* BORRAR USUARIO*/
router.delete(
  "/deleteUser/:id",
  authSession,
  authJWT,
  validateId,
  controller.deleteUser
);

/* LOGIN */
router.post(
  "/login",
  [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Debes ingresar un email")
      .isEmail()
      .withMessage("Debes ingresar un formato de email válido"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Debes ingresar una contraseña"),
  ],
  controller.login
);

/* LOGOUT */
router.get("/logout", authSession, authJWT, controller.logout);

/* LOGS */
router.get("/logs", authSession, authJWT, controller.allLogs);

/* LOGS */
router.get("/logs/:id", authSession, authJWT, controller.userLogs);

module.exports = router;
