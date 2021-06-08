import KeyCode from "./KeyCode";

export default class So {
	static soN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'u', 'i', 'o', 'p', '[', 'a', 's', 'd', 'f', 'g', 'j', 'k', 'k', 'l', ';', "'", 'v', 'n'];
	static convertKey(keys) {
		keys = keys.map(key => KeyCode.convertKey(key)).sort().join('');
		switch (keys) {
			case '#s-':
				return '1';
			case '#k-':
				return '2';
			case '#r-':
				return '3';
			case '#n-':
				return '4';
			case '#h':
				return '5';
			case '#o':
				return '0';
			case '#w':
				return '6';
			case '#-j':
				return '7';
			case '#-n':
				return '8';
			case '#-t':
				return '9';
			case '#t-':
				return '-1';
			case '#p-':
				return '-2';
			case '#h-':
				return '-3';
			case '#s':
				return '-4';
			case '#i':
				return '-5';
			case '#y':
				return '-6';
			case '#-g':
				return '-7';
			case '#-k':
				return '-8';
			case '#e':
				return '-9';
			default:
				return '';
		}
	}
}