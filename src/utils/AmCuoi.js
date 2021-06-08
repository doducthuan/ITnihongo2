import KeyCode from "./KeyCode";

export default class AmCuoi {
	static amCuoiN = ['o', 'p', '[', 'l', ';', "'"]
	static convertKey(keys) {
		keys = keys.map(key => KeyCode.convertKey(key)).sort().join('');
		switch (keys) {
			case '-t-k':
				return 'p';
			case '-n-k':
				return 'c';
			case '-n-t':
				return 't';
			case '-g-k':
				return 'ch';
			case '-g-j':
				return 'u';
			case '-g':
				return 'ng';
			case '-j':
				return 'i';
			case '-j-n':
				return 'y';
			case '-k':
				return 'nh';
			case '-t':
				return 'm';
			case '-n':
				return 'n';
			case '-j-k':
				return 'o';
			default:
				return '';
		}
	}
}