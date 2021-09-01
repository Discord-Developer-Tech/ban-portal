import { connect } from "mongoose";

export default async function connectDB() {
  const MONGODB_URI = process.env.DATABASE_URL;
  try {
    await connect(`${MONGODB_URI}`, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.info("Connected to mongodb");
  } catch (err) {
    console.error(err);
  }
}