import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const {
	PORT = 3000,
} = process.env;


app.get('/', (req: Request, res: Response) => {
	res.send({
		message: 'hello world',
	});
});
app.listen(PORT, async () => {
	console.log('server started at http://localhost:'+PORT);
});
