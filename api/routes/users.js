import express, { Router } from "express";
import { deleteuser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user you are logged in!")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user you are logged in and can delete your account!")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin, you are logged in and can delete all accounts!")
// })

//UPDATE
router.post("/", verifyUser, updateUser)

//DELETE
router.post("/", verifyUser, deleteuser)

//GET
router.post("/", verifyUser,getUser)

//GET ALL USERS
router.post("/", verifyAdmin, getUsers)

export default router;