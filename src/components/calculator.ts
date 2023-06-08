import {fileTypeFromFile} from 'file-type';

class Calculator {
	async sum(a, b) {

	console.log(await fileTypeFromFile('Unicorn.png'));
		return a+b;
	}
}

export default Calculator;
