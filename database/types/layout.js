// TODO: While generating custom layout we need to specifiy layout
module.exports = function (Sequelize) {
	return {
		id: {
			type: Sequelize.INTEGER,
			primary: true,
			autoincrement: true
		},
		name: Sequelize.STRING,
		updatedAt: Sequelize.DATE,
		createdAt: Sequelize.DATE
	}
}
