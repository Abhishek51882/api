const Student=require('../models/Student');
module.exports.getStudents=function(req,res){
    
    return res.json(404,{
        name:"Mohit",
        age:22,
        rollNo:121
    })
}
module.exports.create=async function(req,res){
    // const s=await new Student(req.body).save();
     const s=await Student.create(req.body);
    console.log("....",req);
    return res.status(200).json({
        data:"hello",
    })
    return res.json(200,{s:s,name:"durga"});

    

}
module.exports.fun=function(req,res){
    return res.json(200,{
        data:req.query.id,
        name:"abhishek",
    })
}
module.exports.getStudent=async function(req,res){
    let s= await Student.findById(req.params.id);
   
    return res.json(200,{
        data:req.params.id,
        name:s,
    })
}