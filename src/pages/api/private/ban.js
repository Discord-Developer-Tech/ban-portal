import connectDB from "../../../utils/connectDB";
import BanModel from "../../../models/Ban";

import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  const session = await getSession({ req });

  switch (method) {
    case "GET":
      try {
        const data = await BanModel.find();
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      const { ruser, time, notes, reason } = JSON.parse(req.body);

      console.log(JSON.parse(req.body))

      try {
        const newBan = new BanModel({
          ruser,
          reason,
          time,
          notes,
          mod: session.user.email
        });

        await newBan.save();
        res.status(200).json({ success: true, ban: newBan });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
