import {Sequelize} from 'sequelize'

const db = new Sequelize('heroku_ef92cd14c0bcf40', 'b9bd810202aadc', 'd257bbbf',{
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql'
})

export default db

