import mongoose ,{ Schema , Document } from "mongoose";

interface Istudent extends Document
{
    id:string;
    fullname:string,
    age:string,
    email:string,
    class:string
}

const studentSchema: Schema = new Schema (
    {
        id:{type: String},
        fullname:{ type: String,required:true},
        age:{type: String},
        email:{type: String},
        class:{type: String}

    }
)

export const studentModel = mongoose.model<Istudent>("students",studentSchema)