import AutoModel from '../models/Model.js'

//Metodos para el CRUD

// Mostrar todos los registros
export const getAllAutos =  async (req, res) => {
    try{
        const autos = await AutoModel.findAll()
        res.json(autos)
    }catch(error){
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getAuto = async (req, res) => {
    try {
        const auto = await AutoModel.findAll({
            where:{id:req.params.id}
        })
        res.json(auto[0])
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Crear un registro
export const createAuto = async (req, res) => {
    try {
        await AutoModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
        
    } catch (error) {
        res.json({message: error.message})  
    }
}

//Actualizar un registro
export const updateAuto = async (req, res) => {
    try {
        await AutoModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
        
    } catch (error) {
        res.json({message: error.message})  
    }
}

// Eliminar un registro
export const deleteAuto = async (req, res) => {
    try {
        await AutoModel.destroy({
            where:{id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
        
    } catch (error) {
        res.json({message: error.message})  
    }
}