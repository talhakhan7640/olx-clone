import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoute from './routes/authentication.js'
import productRoute from './routes/product';

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

app.use('/', userRoute);
app.use('/products/', productRoute)

try {
   mongoose.connect(process.env.MONGO_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
   .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}!`));
   }) 
   .catch((error) => {
    console.log(`Server could not be started!! ${error.message}`)
   })
} catch (error) {
   console.log("Server crashed before starting!!") 
}
