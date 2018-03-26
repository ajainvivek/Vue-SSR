module.exports = function (Sequelize) {
	return {
		id: {
			type: Sequelize.INTEGER,
			primary: true,
			autoincrement: true
		},
		name: Sequelize.STRING,
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false
			// references: {
			// 	model: {
			// 		tableName: "user",
			// 		schema: "bloge"
			// 	},
			// 	key: "id",
			// 	onUpdate: "cascade",
			// 	onDelete: "cascade"
			// }
		},
		themeId: {
			type: Sequelize.INTEGER,
			allowNull: false
			// references: {
			// 	model: {
			// 		tableName: "theme",
			// 		schema: "bloge"
			// 	},
			// 	key: "id",
			// 	onUpdate: "cascade",
			// 	onDelete: "cascade"
			// }
		},
		domain: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		meta: {
			type: Sequelize.JSON,
			defaultValue: {} // [{"name": "description", "content": "Test description"}]
		},
		link: {
			type: Sequelize.JSON,
			defaultValue: [] // [{"rel": "canonical", "href": "http://mysite.com/example"}]
		},
		noscript: {
			type: Sequelize.JSON,
			defaultValue: [] //  [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
		},
		script: {
			type: Sequelize.JSON,
			defaultValue: [] // [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
		},
		style: {
			type: Sequelize.JSON,
			defaultValue: [] // [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
		},
		base: {
			type: Sequelize.JSON,
			defaultValue: {} // {"target": "_blank", "href": "http://mysite.com/"}
		},
		htmlAttributes: {
			type: Sequelize.JSON,
			defaultValue: {} // {"lang": "en", "amp": undefined}
		},
		updatedAt: Sequelize.DATE,
		createdAt: Sequelize.DATE
	}
}
