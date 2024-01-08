import mongoose from "mongoose"

export const conn = () => {
    mongoose.connect(process.env.MONGODBURL)
        .then(() => {
            console.log("hello from mongodsaSasv")
        })

}

