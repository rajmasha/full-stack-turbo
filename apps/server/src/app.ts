import express from "express";

export default class App {
  public app: express.Application;
  public port: number;

  constructor({ port }: { port: number }) {
    this.app = express();
    this.port = port;
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}
