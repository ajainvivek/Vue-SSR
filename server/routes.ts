

import { Application, Request, Response, NextFunction, Router } from "express"
import PageCtrl from "./controllers/PageCtrl"

export default class Routes {
	pageCtrl = new PageCtrl()
	constructor(app: Application) {
		app.route("/api/pages/").get(this.pageCtrl.getAllPages);
	}
}