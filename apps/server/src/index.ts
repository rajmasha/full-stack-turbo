import { Request, Response } from "express";
import App from "./app";

const server = new App({ port: 3000 });
const app = server.app;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

server.listen();
