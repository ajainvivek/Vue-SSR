import { Router, Request, Response, NextFunction } from "express"

export default class PageRoutes {

    constructor() {

    }

    getAllPages(req: Request, res: Response, next: NextFunction) {
        res.json([
			{
				name: "a",
				layout: 2
			}
		])
    }
}