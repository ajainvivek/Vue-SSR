"use strict"

const user = require("./../types/user")
const theme = require("./../types/theme")
const component = require("./../types/component")

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.createTable("user", user(Sequelize)),
			queryInterface.createTable("theme", theme(Sequelize)),
			queryInterface.createTable("component", component(Sequelize))
		])
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.dropTable("user"),
			queryInterface.dropTable("theme"),
			queryInterface.dropTable("component")
		])
	}
}
