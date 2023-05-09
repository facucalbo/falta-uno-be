import mongoose, { Model, Schema } from "mongoose";
import { Example } from "../interfaces/Example";

export class ExampleModel{ 

    private myExample: Schema
    public myModel: Model<Example>;

    constructor() {
        this.myExample = new mongoose.Schema<Example>({
            example: String
        })

        this.myModel = mongoose.model<Example>('Example', this.myExample)
        const exampleModel = new this.myModel({example: 'fafafa'})
        exampleModel.save()
    }
}