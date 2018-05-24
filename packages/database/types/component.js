module.exports = function (Sequelize) {
	return {
		id: {
			type: Sequelize.INTEGER,
			primary: true,
			autoincrement: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		updatedAt: Sequelize.DATE,
		createdAt: Sequelize.DATE
	}
}
