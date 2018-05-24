module.exports = function (Sequelize) {
	return {
		id: {
			type: Sequelize.INTEGER,
			primary: true,
			autoincrement: true
		},
		name: Sequelize.STRING,
		mobile: Sequelize.INTEGER,
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		updatedAt: Sequelize.DATE,
		createdAt: Sequelize.DATE
	}
}
