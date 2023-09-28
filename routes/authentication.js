import express from 'express';
import { userRegistrationController, userLoginController } from '../controller/authentication.js';

const userRoute = express.Router();

userRoute.post("/registration", userRegistrationController);
userRoute.post("/login", userLoginController);

export default userRoute;
