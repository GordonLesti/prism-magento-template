Prism.languages.magentotemplate = {
    'tag': {
        pattern: /\{\{[\s\S]*?\}\}/,
        inside: {
            'ld': {
                pattern: /^(?:\{\{\-?\-?\/*\s*\w+)/,
                inside: {
                    'delimiter': /^(?:\{\{\/*)\-?/,
                    'keyword': /\w+/
                }
            },
            'rd': {
                pattern: /\-?(?:%\}|\}\})$/,
                inside: {
                    'delimiter': /.*/
                }
            },
            'string': {
				pattern: /("|')(?:\\?.)*?\1/,
				inside: {
					'punctuation': /^['"]|['"]$/
				}
			},
            'keyword': /\b(?:raw)\b/,
            'operator': /=/,
            'variable': /\$\w+\b/i,
            'property': /\b[a-zA-Z_][a-zA-Z0-9_]*\b/,
            'punctuation': /[()\[\]{}:.,]/
        }
    }
};
