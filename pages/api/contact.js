import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Wrong input!" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    let client;
    try {
      client = await MongoClient.connect(process.env.MONGODB_URI);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Could not connect to db.", DBmessage: err });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res
        .status(500)
        .json({ message: "Storing message failed!", DBmessage: err });
      return;
    }

    client.close();
    return res.status(201).json({ message: "Success!", message: newMessage });
  }
}

export default handler;
