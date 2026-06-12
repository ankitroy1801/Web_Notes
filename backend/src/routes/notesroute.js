import express from "express";
import { createnote, deletenote, getallnotes, updatenote, getnotebyid } from "../controllers/notescontroller.js";
const router = express.Router();

router.get("/", getallnotes);
router.post("/",createnote);
router.put("/:id",updatenote);
router.delete("/:id",deletenote);
router.get("/:id",getnotebyid);

export default router;