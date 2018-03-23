import * as ORM from 'sequelize'
import { Sequelize } from "sequelize"

const db = "bloge"
const username = "root"
const password = ""

export const sequelize: Sequelize = new ORM(db, username, password, {
  dialect: "mysql",
  port: 3306
})

export const initialize = function () {
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  })
}