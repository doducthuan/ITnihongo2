export default class KeyCode {
	static convertKey(normalKey) {
		switch (normalKey) {
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '0':
				return '#';
			case 'q':
				return 's-';
			case 'w':
				return 'k-';
			case 'e':
				return 'r-';
			case 'r':
				return 'n-';
			case 't':
				return 'h-';
			case 'a':
				return 't-';
			case 's':
				return 'p-';
			case 'd':
				return 'h-';
			case 'f':
				return 'n';
			case 'g':
				return 's';
			case 'c':
				return 'u';
			case 'v':
				return 'o';
			case 'u':
				return '*';
			case 'i':
				return 'w';
			case 'o':
				return '-j';
			case 'p':
				return '-n';
			case '[':
				return '-t';
			case 'j':
				return 'i';
			case 'k':
				return 'y';
			case 'l':
				return '-j';
			case ';':
				return '-g';
			case '\'':
				return '-k';
			case 'n':
				return 'e';
			case 'm':
				return 'a';
			default:
				return '';
		}
	}
}