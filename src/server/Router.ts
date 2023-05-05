import { Test } from "./routes/Test"

export class Router {
    constructor(private app: any) {
        this.init()
    }

    private init() {
        // this.app.use()
        this.app.use(new Test().router)
    }
}