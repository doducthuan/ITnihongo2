import KeyCode from "./KeyCode";

const stringArr = ['i', 'í', 'ì', 'ị', 'ĩ', 'ỉ', 'y', 'ý', 'ỳ', 'ỵ', 'ỹ', 'ỷ', 'e', 'é', 'è', 'ẹ', 'ẽ', 'ẻ', 'ê', 'ế', 'ề', 'ệ', 'ễ', 'ể'];

export default class AmDau {
	static amDauN = ['q', 'w', 'e', 'a', 's', 'd'];
	static convertKey(keys, nextString) {
		keys = keys.map(key => KeyCode.convertKey(key)).sort().join('');
		switch (keys) {
			case 'k-r-':
				if (stringArr.includes(nextString[0])) return 'ngh';
				return 'ng';
			case 'p-t-':
				return 'đ';
			case 'h-k-':
				return 'kh';
			case 'k-p-':
				if (stringArr.includes(nextString[0])) return 'gh';
				return 'g';
			case 'p-':
				return 'b';
			case 'h-s-':
				return 'gi';
			case 'k-':
				if (stringArr.includes(nextString[0])) return 'k';
				return 'c';
			case 'p-s-':
				return 'd';
			case 'k-s-':
				return 'ch';
			case 'h-':
				return 'h';
			case 'r-s-':
				return 'l';
			case 'h-r-':
				return 'm';
			case 'p-r-':
				return 'n';
			case 'h-p-s-':
				return 'p';
			case 'k-s-t-':
				return 'q';
			case 'r-':
				return 'r';
			case 's-':
				return 's';
			case 't-':
				return 't';
			case 'h-t-':
				return 'th';
			case 'p-r-s-':
				return 'v';
			case 'h-p-':
				return 'ph';
			case 's-t-':
				return 'x';
			case 'k-t-':
				return 'nh';
			case 'r-t-':
				return 'tr';
			default:
				return '';
		}
	}
}