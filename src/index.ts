// import express, { Request, Response } from 'express';

// const app = express();
// const {
// 	PORT = 3000,
// } = process.env;
//
// app.get('/', (req: Request, res: Response) => {
// 	res.send({
// 		message: 'hello world',
// 	});
// });
// app.listen(PORT, async () => {
// 	console.log('server started at http://localhost:'+PORT);
//
// 	// console.log(await fileTypeFromFile('Unicorn.png'));
// });

import Calculator from "./components/calculator";

const calc = new Calculator();

console.log("sum", await calc.sum(2, 3));
