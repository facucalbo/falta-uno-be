import mongoose from "mongoose"

mongoose.Promise = global.Promise

export class DataBase {
    
    public async connectDB(uri: string) {
        await mongoose.connect(uri)
        console.log('[db] Conectada con exito')
    }
}