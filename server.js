import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// const CONNECTION_URL =
//   "mongodb+srv://Ted:ted12345@collectiondb.ntn6l.mongodb.net/item?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// Connect to Mongo
mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  )
  .catch((err) => console.log(err));

// mongoose.set("useFindAndModify", false);
