import * as express from "express"
import { Application } from "express"
import * as bodyParser from "body-parser"
import * as morgan from "morgan"
import * as fs from "fs"
import { WriteStream } from "fs"
import * as path from "path"

import Routes from "./routes"

export default class Server {
	constructor(app: Application) {
        const routes: Routes = new Routes(app);
	}
	
	public config(app: Application): void {
        var accessLogStream: WriteStream = fs.createWriteStream(path.join(__dirname, "./logs/access.log"), { flags: "a" });
        app.use(morgan("combined", { stream: accessLogStream }));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
    }
}