import KeyCode from "./KeyCode";

export default class AmChinh {
	static amChinhN = ['r', 't', 'f', 'g', 'c', 'v', 'u', 'i', 'j', 'k', 'm', 'n'];
	static convertKey(keys, hasAmDau, hasAmCuoi) {
		keys = keys.map(key => KeyCode.convertKey(key)).sort().join('');
		console.log(keys);
		switch (keys) {
			case 'hosu':
				if (hasAmCuoi) return 'uổ';
				return 'ủa';
			case 'nosu':
				if (hasAmCuoi) return 'uỗ';
				return 'ũa';
			case '*a':
				return 'ă';
			case 'nou':
				if (hasAmCuoi) return 'uộ';
				return 'ụa';
			case 'sy':
				return 'uớ';
			case 'ehy':
				if (hasAmCuoi) return 'uyề';
				return 'uỳa';
			case 'hy':
				return 'uờ';
			case 'hsy':
				return 'uở';
			case 'nsy':
				return 'uỡ';
			case '*y':
				return 'uâ';
			case 'ny':
				return 'uợ';
			case 'nu':
				return 'ọa';
			case 'eis':
				if (hasAmDau && hasAmCuoi) return 'iế';
				if (hasAmDau) return 'ía';
				return 'yế';
			case 'hsu':
				return 'oả';
			case 'eu':
				return 'uê';
			case 'ehsw':
				if (hasAmCuoi) return 'ưở';
				return 'ửa';
			case 'ei':
				if (hasAmDau && hasAmCuoi) return 'iê';
				if (hasAmDau) return 'ia';
				return 'yê';
			case 'huy':
				return 'uỳ';
			case 'ou':
				return 'uô';
			case '*su':
				return 'oắ';
			case 'nuy':
				return 'uỵ';
			case '*hu':
				return 'oằ';
			case 'hsuy':
				return 'uỷ';
			case '*hsu':
				return 'oẳ';
			case 'nsuy':
				return 'uỹ';
			case '*nsu':
				return 'oẵ';
			case '*nu':
				return 'oặ';
			case 'suy':
				return 'uý';
			case '*ins':
				return 'ĩ';
			case 'any':
				return 'oẹ';
			case 'esw':
				if (hasAmCuoi) return 'ướ';
				return 'ứa';
			case 'ahsy':
				return 'oẻ';
			case 'ehw':
				if (hasAmCuoi) return 'ườ';
				return 'ừa';
			case 'ansy':
				return 'oẽ';
			case 'ensw':
				if (hasAmCuoi) return 'ưỡ';
				return 'ữa';
			case 'enw':
				if (hasAmCuoi) return 'ượ';
				return 'ựa';
			case 'esy':
				if (hasAmCuoi) return 'uyế';
				return 'uýa';
			case 'ey':
				if (hasAmCuoi) return 'uyê';
				return 'uya';
			case '*no':
				return 'oọ';
			case 'eny':
				if (hasAmCuoi) return 'uyệ';
				return 'uỵa';
			case 'hu':
				return 'oà';
			case 'su':
				return 'oá';
			case 'nsu':
				return 'oã';
			case 'eins':
				if (hasAmDau && hasAmCuoi) return 'iễ'
				if (hasAmDau) return 'ĩa';
				return 'yễ';
			case 'ahy':
				return 'oè';
			case 'asy':
				return 'oé';
			case 'a':
				return 'a';
			case '*ho':
				return 'oò';
			case '*os':
				return 'oó';
			case 'ehi':
				if (hasAmDau && hasAmCuoi) return 'iề';
				if (hasAmDau) return 'ìa';
				return 'yề';
			case '*i':
				return 'i';
			case 'insu':
				return 'ũ';
			case 'ehis':
				if (hasAmDau && hasAmCuoi) return 'iể';
				if (hasAmDau) return 'ỉa';
				return 'yể';
			case 'ein':
				if (hasAmDau && hasAmCuoi) return 'iệ';
				if (hasAmDau) return 'ịa';
				return 'yệ';
			case 'o':
				return 'o';
			case '*u':
				return 'oă';
			case 'iu':
				return 'u';
			case 'i':
				return 'y';
			case 'ehsy':
				if (hasAmCuoi) return 'uyể';
				return 'uỷa';
			case 'hou':
				if (hasAmCuoi) return 'uồ';
				return 'ùa';
			case 'w':
				return 'ơ';
			case 'an':
				return 'ạ';
			case 'ahs':
				return 'ả';
			case 'uy':
				return 'uy';
			case '*sw':
				return 'ấ';
			case '*hw':
				return 'ầ';
			case 'osu':
				if (hasAmCuoi) return 'uố';
				return 'úa';
			case '*hsw':
				return 'ẩ';
			case '*nsw':
				return 'ẫ';
			case '*nw':
				return 'ậ';
			case '*as':
				return 'ắ';
			case 'uw':
				return 'ư';
			case 'ew':
				if (hasAmCuoi) return 'ươ';
				return 'ưa';
			case '*ah':
				return 'ằ';
			case '*ahs':
				return 'ẳ';
			case '*ans':
				return 'ẵ';
			case '*an':
				return 'ặ';
			case 'ensy':
				return 'uỹa';
			case 'en':
				return 'ẹ';
			case 'ehs':
				return 'ẻ';
			case 'ens':
				return 'ẽ';
			case 'eos':
				return 'ế';
			case 'eoh':
				return 'ề';
			case 'eohs':
				return 'ể';
			case 'enos':
				return 'ễ';
			case 'eno':
				return 'ệ';
			case '*his':
				return 'ỉ';
			case '*in':
				return 'ị';
			case 'y':
				return 'uơ';
			case 'no':
				return 'ọ';
			case 'ohs':
				return 'ỏ';
			case '*sy':
				return 'uấ';
			case 'osw':
				return 'ố';
			case 'u':
				return 'oa';
			case '*hy':
				return 'uầ';
			case 'how':
				return 'ồ';
			case '*hsy':
				return 'uẩ';
			case 'ohsw':
				return 'ổ';
			case 'ay':
				return 'oe';
			case '*nsy':
				return 'uẫ';
			case 'nosw':
				return 'ỗ';
			case '*ny':
				return 'uậ';
			case 'now':
				return 'ộ';
			case 'sw':
				return 'ớ';
			case 'hw':
				return 'ở';
			case 'ah':
				return 'à';
			case '*o':
				return 'oo';
			case 'nsw':
				return 'ỡ';
			case 'as':
				return 'á';
			case '*w':
				return 'â';
			case 'nw':
				return 'ợ';
			case 'ans':
				return 'ã';
			case 'inu':
				return 'ụ';
			case 'hisu':
				return 'ủ';
			case 'eh':
				return 'è';
			case 'es':
				return 'é';
			case 'suw':
				return 'ứ';
			case 'eo':
				return 'ê';
			case 'esu':
				return 'uế';
			case 'huw':
				return 'uề';
			case 'nsuw':
				return 'ữ';
			case 'ensu':
				return 'uễ';
			case 'nuw':
				return 'ự';
			case 'ho':
				return 'ò';
			case 'enu':
				return 'uệ';
			case 'hi':
				return 'ỳ';
			case 'os':
				return 'ó';
			case 'ow':
				return 'ô';
			case 'nos':
				return 'õ';
			case 'his':
				return 'ỷ';
			case 'ins':
				return 'ỹ';
			case 'hiu':
				return 'ù';
			case 'isu':
				return 'ú';
			case 'is':
				return 'ý';
			default:
				return '';
		}
	}
}