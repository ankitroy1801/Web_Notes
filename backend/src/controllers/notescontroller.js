import Note from "../models/Note.js";

export async function getallnotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getallnotes controller",error);
        res.status(500).json({message:"Internal Server Error"});
    }  
}
export async function createnote(req,res){
    try{
        const{title,content}=req.body;
        const newnote=new Note({title,content});
        await newnote.save();
        res.status(201).json({message:"Note Created successfully"});
    }catch(error){
        console.error("Error in getallnotes controller",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}
export async function updatenote(req,res){
    try{
        const{title,content}=req.body;
        const updatenote =await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new : true ,}
        );
        if(!updatenote)return res.status(404).json({message: "Note not found"});
        res.status(200).json({updatenote});
    }catch(error){
        console.error("Error in updatenote controller",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}
export async function deletenote(req,res){
    try{
        const deletednote =await Note.findByIdAndDelete(req.params.id);
        if(!deletednote)return res.status(404).json({message: "Note not found"});
        res.status(200).json({message:"Note deleted successfully"});
    }catch(error){
        console.error("Error in deletenote controller",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}
export async function getnotebyid(req,res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note)return res.status(404).json({message: "Note not found"});
        res.json(note);
    } catch (error) {
        console.error("Error in getnotebyid controller",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}


