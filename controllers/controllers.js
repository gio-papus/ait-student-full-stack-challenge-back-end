import Images from "../models/models.js"


export const getImages=async (req,res)=>{
    try{
        const images = await Images.find()
        return res.json(images)

    }catch(error){
            return res.status(500).json({message:error.message})
    }
}
export const addImages= async (req,res)=>{
    try{
        const {name,url,rol}=req.body
        const images=new Images({
            name,
            rol,
            url
        })
        await images.save()
        return res.json(images)

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
export const changeImages=async (req,res)=>{
    try{

        const {id}=req.params
      const upgradeImage=await Images.findByIdAndUpdate(id,req.body,{
          new:true
      })
        console.log(req.body)
          return res.json(upgradeImage)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

export const deleteImages=async (req,res)=>{
    try{

        const images= await Images.findByIdAndDelete(req.params.id)
        if(!images) return res.status(404).json({
         message:"don t exists"
        })
         return res.json(images)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    
  
}
export const getImage=async (req,res)=>{
    try{
        const images= await Images.findById(req.params.id)
        if(!images) return res.status(404).json({
            message:"don t exists"
           })
         return res.json(images)

    }catch(error){

        return res.status(500).json({message:error.message})
    }
    
  
 }