function builtinRead(x) {
	if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
		throw "File not found: '" + x + "'";
	return Sk.builtinFiles["files"][x];
}

var codeMirror = CodeMirror(document.getElementById('code'), {
	lineNumbers: true,
	value: `from turtle import *

forward(100)
left(90)

print("Hello World")`
});

document.addEventListener('keydown', e => {
	if (e.key !== 'F5')
		return;

	document.getElementById('console').innerHTML = '';
	Sk.pre = 'console';
	Sk.configure({
		output: text => document.getElementById('console').innerHTML += text,
		read: builtinRead,
		__future__: Sk.python3
	});
	(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'canvas';

	Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, codeMirror.getValue(), true))
		.then(mod => {
			console.log('success');
		}, err => {
			alert(err.toString());
		});

	e.preventDefault();
});
