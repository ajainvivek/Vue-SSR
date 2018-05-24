"use strict"

const template = require("./../types/template")
const site = require("./../types/site")
const page = require("./../types/page")

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.createTable("template", template(Sequelize)),
			queryInterface.createTable("site", site(Sequelize)),
			queryInterface.createTable("page", page(Sequelize))
		])
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.dropTable("template"),
			queryInterface.dropTable("site"),
			queryInterface.dropTable("page")
		])
	}
}
