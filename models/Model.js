//importamos la conexion a la bd
import db from "../database/db.js"
import { DataTypes } from "sequelize"

const AutoModel = db.define('autos',{
    nombre: {type:DataTypes.STRING},
    marca: {type:DataTypes.STRING},
    modelo: {type:DataTypes.NUMBER},
    precio: {type:DataTypes.FLOAT}

})

export default AutoModel