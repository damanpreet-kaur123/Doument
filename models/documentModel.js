import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
    {
        url: { type: String, required: true },
        userid: { type: String, required: true },
    },
    { timestamps: true }
);

const Image = mongoose.model("Image", documentSchema);

export default Image;
