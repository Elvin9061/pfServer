
const projects = require('../Models/projectSchema')
exports.addProject = async (req, res)=>{
    console.log("Inside add Project controll");
    console.log("getting user id in controller");
    const userId=req.payload;
    console.log(userId)
    const projectImage = req.file.filename;
    console.log(projectImage);
    const {title, language, github, website, overview} = req.body;
    try{
        //we can use github link to check whether this project is already uploaded
        const existingProject = await projects.findOne({github: github})
        if (existingProject){
            res.status(406).json("project already exist, upload new project")
        }
        else{
            const newProject = new projects({
                title:title,
                language:language,
                github:github,
                website:website,
                overview:overview,
                userId:userId,
                projectImage:projectImage
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
        res.status(401).json("Add project request failed due to error", err)
    }
}