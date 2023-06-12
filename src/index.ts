import {add} from "./app";
import {fileTypeFromBuffer} from 'file-type';
import {readChunk} from 'read-chunk';

export class SomeClass {
	test: string;

	public someFunction() {
		return add(1, 2);
	}

	public async fileType() {

		const buffer = await readChunk('Unicorn.png', {length: 4100});

		console.log(await fileTypeFromBuffer(buffer));
	}
}

const testClass = new SomeClass();

console.log(testClass.someFunction());
// console.log(testClass.fileType());
