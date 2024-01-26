import {telegram_scraper} from 'telegram-scraper'

export async function telegram_rss(channel){

	var HtmlEntities = function() {};

	HtmlEntities.map = {
		"'": "&apos;",
		"<": "&lt;",
		">": "&gt;",
		" ": "&nbsp;",
		"¡": "&iexcl;",
		"¢": "&cent;",
		"£": "&pound;",
		"¤": "&curren;",
		"¥": "&yen;",
		"¦": "&brvbar;",
		"§": "&sect;",
		"¨": "&uml;",
		"©": "&copy;",
		"ª": "&ordf;",
		"«": "&laquo;",
		"¬": "&not;",
		"®": "&reg;",
		"¯": "&macr;",
		"°": "&deg;",
		"±": "&plusmn;",
		"²": "&sup2;",
		"³": "&sup3;",
		"´": "&acute;",
		"µ": "&micro;",
		"¶": "&para;",
		"·": "&middot;",
		"¸": "&cedil;",
		"¹": "&sup1;",
		"º": "&ordm;",
		"»": "&raquo;",
		"¼": "&frac14;",
		"½": "&frac12;",
		"¾": "&frac34;",
		"¿": "&iquest;",
		"À": "&Agrave;",
		"Á": "&Aacute;",
		"Â": "&Acirc;",
		"Ã": "&Atilde;",
		"Ä": "&Auml;",
		"Å": "&Aring;",
		"Æ": "&AElig;",
		"Ç": "&Ccedil;",
		"È": "&Egrave;",
		"É": "&Eacute;",
		"Ê": "&Ecirc;",
		"Ë": "&Euml;",
		"Ì": "&Igrave;",
		"Í": "&Iacute;",
		"Î": "&Icirc;",
		"Ï": "&Iuml;",
		"Ð": "&ETH;",
		"Ñ": "&Ntilde;",
		"Ò": "&Ograve;",
		"Ó": "&Oacute;",
		"Ô": "&Ocirc;",
		"Õ": "&Otilde;",
		"Ö": "&Ouml;",
		"×": "&times;",
		"Ø": "&Oslash;",
		"Ù": "&Ugrave;",
		"Ú": "&Uacute;",
		"Û": "&Ucirc;",
		"Ü": "&Uuml;",
		"Ý": "&Yacute;",
		"Þ": "&THORN;",
		"ß": "&szlig;",
		"à": "&agrave;",
		"á": "&aacute;",
		"â": "&acirc;",
		"ã": "&atilde;",
		"ä": "&auml;",
		"å": "&aring;",
		"æ": "&aelig;",
		"ç": "&ccedil;",
		"è": "&egrave;",
		"é": "&eacute;",
		"ê": "&ecirc;",
		"ë": "&euml;",
		"ì": "&igrave;",
		"í": "&iacute;",
		"î": "&icirc;",
		"ï": "&iuml;",
		"ð": "&eth;",
		"ñ": "&ntilde;",
		"ò": "&ograve;",
		"ó": "&oacute;",
		"ô": "&ocirc;",
		"õ": "&otilde;",
		"ö": "&ouml;",
		"÷": "&divide;",
		"ø": "&oslash;",
		"ù": "&ugrave;",
		"ú": "&uacute;",
		"û": "&ucirc;",
		"ü": "&uuml;",
		"ý": "&yacute;",
		"þ": "&thorn;",
		"ÿ": "&yuml;",
		"Œ": "&OElig;",
		"œ": "&oelig;",
		"Š": "&Scaron;",
		"š": "&scaron;",
		"Ÿ": "&Yuml;",
		"ƒ": "&fnof;",
		"ˆ": "&circ;",
		"˜": "&tilde;",
		"Α": "&Alpha;",
		"Β": "&Beta;",
		"Γ": "&Gamma;",
		"Δ": "&Delta;",
		"Ε": "&Epsilon;",
		"Ζ": "&Zeta;",
		"Η": "&Eta;",
		"Θ": "&Theta;",
		"Ι": "&Iota;",
		"Κ": "&Kappa;",
		"Λ": "&Lambda;",
		"Μ": "&Mu;",
		"Ν": "&Nu;",
		"Ξ": "&Xi;",
		"Ο": "&Omicron;",
		"Π": "&Pi;",
		"Ρ": "&Rho;",
		"Σ": "&Sigma;",
		"Τ": "&Tau;",
		"Υ": "&Upsilon;",
		"Φ": "&Phi;",
		"Χ": "&Chi;",
		"Ψ": "&Psi;",
		"Ω": "&Omega;",
		"α": "&alpha;",
		"β": "&beta;",
		"γ": "&gamma;",
		"δ": "&delta;",
		"ε": "&epsilon;",
		"ζ": "&zeta;",
		"η": "&eta;",
		"θ": "&theta;",
		"ι": "&iota;",
		"κ": "&kappa;",
		"λ": "&lambda;",
		"μ": "&mu;",
		"ν": "&nu;",
		"ξ": "&xi;",
		"ο": "&omicron;",
		"π": "&pi;",
		"ρ": "&rho;",
		"ς": "&sigmaf;",
		"σ": "&sigma;",
		"τ": "&tau;",
		"υ": "&upsilon;",
		"φ": "&phi;",
		"χ": "&chi;",
		"ψ": "&psi;",
		"ω": "&omega;",
		"ϑ": "&thetasym;",
		"ϒ": "&Upsih;",
		"ϖ": "&piv;",
		"–": "&ndash;",
		"—": "&mdash;",
		"‘": "&lsquo;",
		"’": "&rsquo;",
		"‚": "&sbquo;",
		"“": "&ldquo;",
		"”": "&rdquo;",
		"„": "&bdquo;",
		"†": "&dagger;",
		"‡": "&Dagger;",
		"•": "&bull;",
		"…": "&hellip;",
		"‰": "&permil;",
		"′": "&prime;",
		"″": "&Prime;",
		"‹": "&lsaquo;",
		"›": "&rsaquo;",
		"‾": "&oline;",
		"⁄": "&frasl;",
		"€": "&euro;",
		"ℑ": "&image;",
		"℘": "&weierp;",
		"ℜ": "&real;",
		"™": "&trade;",
		"ℵ": "&alefsym;",
		"←": "&larr;",
		"↑": "&uarr;",
		"→": "&rarr;",
		"↓": "&darr;",
		"↔": "&harr;",
		"↵": "&crarr;",
		"⇐": "&lArr;",
		"⇑": "&UArr;",
		"⇒": "&rArr;",
		"⇓": "&dArr;",
		"⇔": "&hArr;",
		"∀": "&forall;",
		"∂": "&part;",
		"∃": "&exist;",
		"∅": "&empty;",
		"∇": "&nabla;",
		"∈": "&isin;",
		"∉": "&notin;",
		"∋": "&ni;",
		"∏": "&prod;",
		"∑": "&sum;",
		"−": "&minus;",
		"∗": "&lowast;",
		"√": "&radic;",
		"∝": "&prop;",
		"∞": "&infin;",
		"∠": "&ang;",
		"∧": "&and;",
		"∨": "&or;",
		"∩": "&cap;",
		"∪": "&cup;",
		"∫": "&int;",
		"∴": "&there4;",
		"∼": "&sim;",
		"≅": "&cong;",
		"≈": "&asymp;",
		"≠": "&ne;",
		"≡": "&equiv;",
		"≤": "&le;",
		"≥": "&ge;",
		"⊂": "&sub;",
		"⊃": "&sup;",
		"⊄": "&nsub;",
		"⊆": "&sube;",
		"⊇": "&supe;",
		"⊕": "&oplus;",
		"⊗": "&otimes;",
		"⊥": "&perp;",
		"⋅": "&sdot;",
		"⌈": "&lceil;",
		"⌉": "&rceil;",
		"⌊": "&lfloor;",
		"⌋": "&rfloor;",
		"⟨": "&lang;",
		"⟩": "&rang;",
		"◊": "&loz;",
		"♠": "&spades;",
		"♣": "&clubs;",
		"♥": "&hearts;",
		"♦": "&diams;"
	};

	HtmlEntities.decode = function(string) {
		var entityMap = HtmlEntities.map;
		for (var key in entityMap) {
			var entity = entityMap[key];
			var regex = new RegExp(entity, 'g');
			string = string.replace(regex, key);
		}
		string = string.replace(/&quot;/g, '"');
		string = string.replace(/&amp;/g, '&');
		string = string.replaceAll('&nbsp;',' ')
		string = string.replaceAll("&#39;","'")
		return string;
	}

	HtmlEntities.encode = function(string) {
		var entityMap = HtmlEntities.map;
		string = string.replace(/&/g, '&amp;');
		string = string.replace(/"/g, '&quot;');
		for (var key in entityMap) {
			var entity = entityMap[key];
			var regex = new RegExp(key, 'g');
			string = string.replace(regex, entity);
		}
		return string;
	}
	
	let data = JSON.parse(await telegram_scraper(channel))
	
	let rss = 	'<?xml version="1.0" encoding="UTF-8" ?>\n'+
					'<rss version="2.0">\n'+
					'	<channel>\n'+
					'		<title>'+channel+'</title>\n'+
					'		<link>https://t.me/'+channel+'</link>\n'+
					'		<description>RSS Feed from '+channel+' Telegram channel</description>\n'+
					'		<pubDate>'+new Date().toJSON()+'</pubDate>\n'
	
	for(let i=0;i<data.length;i++){
		
		let title = ''
		let msg = data[i].message_text
		if(msg == ''){
			title = data[i].data_post
		}else{
			if(msg.length < 250){
				title = msg
			}else{
				let temp = msg.split(" ")
				for(let j=0;j<temp.length;j++){
					let temp_title = title+' '+temp[j]
					if(temp_title.length < 250-4) title = temp_title
				}
				title += ' ...'
			}
		}
		
		let description = '<![CDATA[ '+HtmlEntities.decode(msg)+' ]]>'
		
		let item =	'		<item>\n'+
					'			<title>'+HtmlEntities.decode(title)+'</title>\n'+
					'			<link>'+data[i].message_url+'</link>\n'+
					'			<description>'+HtmlEntities.decode(msg)+'</description>\n'
		if(data[i].message_photo.length > 0){
			item +=	'			<image>\n'+
					'				<url>'+data[i].message_photo[0]+'</url>\n'+
					'				<title>'+HtmlEntities.decode(title)+'</title>\n'+
					'				<link>'+data[i].message_url+'</link>\n'+
					'			</image>\n'
		}
					
		item +=		'			<pubDate>'+data[i].datetime+'</pubDate>\n'+
					'		</item>\n'
		rss += item
	}
					
	rss +=			'	</channel>\n'+
					'</rss>'
	
	return rss
	
}