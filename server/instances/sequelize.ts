import * as Sequelize from 'sequelize'

const db = 'droplet'
const username = 'root'
const password = 'root'

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306
})

sequelize.authenticate()