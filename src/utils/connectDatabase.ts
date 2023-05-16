import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const uri =
      "mongodb+srv://HamzaJavedShaikh:<password>@cluster0.blo8xq3.mongodb.net/?retryWrites=true&w=majority";

    await await mongoose.connect(uri);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("error");
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default connectToDatabase;
