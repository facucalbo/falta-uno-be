import { Router } from "express";
import { ExampleModel } from "../../models/example";

 export class Test {
    public router: Router

    constructor() {
        this.router = Router()
        this.init()
    }

    private init() {
        this.router.route('').get((req, res) => {
            res.json({msg: 'FALOPAAA'})
        })
    }
 }