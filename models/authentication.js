import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const usersDB = mongoose.connection.useDb("UserDatabase");
const userModel = usersDB.model("User", userSchema);

export default userModel;