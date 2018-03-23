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
		themeId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: {
					tableName: "theme",
					schema: "bloge"
				},
				key: "id",
				onUpdate: "cascade",
				onDelete: "cascade"
			}
		},
		updatedAt: Sequelize.DATE,
		createdAt: Sequelize.DATE
	}
}
