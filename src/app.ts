import dotenv from 'dotenv';
import express from 'express';
import http from 'http';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
	res.json('Hello World!');
});

server.listen(process.env.PORT, () => {
	console.log(`App listening on port ${process.env.PORT}`);
});
