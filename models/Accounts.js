import mongoose from "mongoose";
const {Schema,model}=mongoose;

const AccountsSchema=new Schema({
    email:{ type: String, required: true,unique: true },
    password:{ type: String, required: true,},
},{ timestamps: true });

export default mongoose.models.Accounts || model("Accounts",AccountsSchema);