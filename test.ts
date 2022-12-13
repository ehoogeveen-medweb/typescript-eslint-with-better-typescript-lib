function loudError(msg: string): Error {
	console.error(msg);
	return new Error(msg);
}

throw loudError('Hello world!');
