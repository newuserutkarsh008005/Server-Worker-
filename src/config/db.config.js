import mongoose from "mongoose";
import ConfigDet from "./env.config.js";


const db = async () => {
    try {
        await mongoose.connect(ConfigDet.MongoUrl);
        console.log("Mongo Db Connected Successfully");
    } catch (e) {
        console.error("MONGO CONNECTION ERROR:");
        console.error(e);
    }
}
export default db;