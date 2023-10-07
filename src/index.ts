import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});