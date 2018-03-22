import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'

export interface PageAddModel {
	name: string
    layout: string
}

export interface PageModel extends Sequelize.Model<PageModel, PageAddModel> {
	id?: number
	name: string
    layout: string
    createdAt?: string
    updatedAt?: string
}

export const Page = sequelize.define<PageModel, PageAddModel>('page', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
	},
	name: Sequelize.STRING,
    layout: Sequelize.STRING,
})