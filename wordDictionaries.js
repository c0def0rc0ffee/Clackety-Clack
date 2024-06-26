// Easy Words: 4 letters or less
const Easy_Words = [
  'the', 'and', 'for', 'you', 'that', 'with', 'have', 'this', 'from', 'word', 
  'but', 'not', 'what', 'all', 'were', 'when', 'your', 'can', 'said', 'there',
  'use', 'each', 'which', 'their', 'will', 'other', 'about', 'many', 'then',
  'them', 'these', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time',
  'has', 'look', 'two', 'more', 'write', 'see', 'number', 'way', 'could', 'people',
  'my', 'than', 'first', 'water', 'been', 'call', 'who', 'now', 'find', 'long',
  'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'over', 'new',
  'take', 'only', 'little', 'work', 'know', 'place', 'years', 'live', 'me',
  'back', 'give', 'most', 'very', 'after', 'thing', 'our', 'just', 'name', 'good',
  'man', 'think', 'say', 'great', 'where', 'help', 'through', 'much', 'before',
  'line', 'right', 'too', 'means', 'old', 'any', 'same', 'tell', 'boy', 'came',
  'want', 'show', 'also', 'around', 'form', 'three', 'small', 'set', 'put', 'end',
  'does', 'another', 'well', 'large', 'must', 'big', 'even', 'such', 'turn', 'here',
  'come', 'been', 'good', 'make', 'time', 'know', 'take', 'help', 'only', 'look',
  'does', 'very', 'live', 'back', 'give', 'most', 'call', 'find', 'work', 'long',
  'down', 'own', 'part', 'over', 'new', 'want', 'used', 'word', 'even', 'move',
  'hand', 'land', 'home', 'play', 'same', 'read', 'port', 'land', 'near', 'name',
  'move', 'food', 'room', 'read', 'live', 'love', 'made', 'line', 'four', 'left',
  'find', 'keep', 'foot', 'year', 'hand', 'land', 'side', 'long', 'also', 'high',
  'give', 'need', 'many', 'open', 'kind', 'much', 'self', 'last', 'own', 'next',
  'such', 'well', 'show', 'went', 'much', 'came', 'went', 'head', 'kind', 'took',
  'once', 'soon', 'left', 'line', 'head', 'mean', 'such', 'need', 'move', 'book',
  'part', 'seen', 'face', 'want', 'case', 'hand', 'food', 'room', 'name', 'game',
  'town', 'part', 'gone', 'took', 'soon', 'told', 'main', 'took', 'hard', 'king',
  'gone', 'full', 'done', 'town', 'gave', 'stop', 'hope', 'plan', 'kind', 'song',
  'lost', 'must', 'base', 'grow', 'fast', 'less', 'ship', 'meet', 'hill', 'pass',
  'mile', 'fish', 'bird', 'rock', 'feel', 'talk', 'tree', 'race', 'girl', 'star',
  'yard', 'went', 'stay', 'mark', 'star', 'ball', 'road', 'took', 'soon', 'stay'
];

// Medium Words: 5-7 letters
const Medium_Words = [
  'number', 'which', 'their', 'through', 'would', 'there', 'about', 'could', 'write', 
  'first', 'water', 'people', 'called', 'over', 'other', 'another', 'house', 'page', 
  'mother', 'answer', 'found', 'study', 'learn', 'should', 'America', 'world', 'school', 
  'still', 'learn', 'between', 'always', 'letter', 'until', 'often', 'together', 
  'children', 'example', 'important', 'however', 'usually', 'different', 'animals', 
  'picture', 'almost', 'though', 'sometimes', 'mountains', 'family', 'without', 
  'minute', 'system', 'during', 'hundred', 'against', 'pattern', 'certain', 'question', 
  'complete', 'produce', 'measure', 'remember', 'problem', 'toward', 'exercise', 
  'scientific', 'happened', 'language', 'present', 'material', 'fraction', 'region', 
  'believe', 'decimal', 'century', 'describe', 'industry', 'electric', 'observe', 
  'exactly', 'necessary', 'direction', 'surface', 'subject', 'fraction', 'property', 
  'division', 'already', 'nothing', 'instead', 'morning', 'country', 'against', 
  'happened', 'without', 'under', 'another', 'around', 'better', 'different', 
  'another', 'general', 'weather', 'always', 'remember', 'happened', 'against', 
  'almost', 'morning', 'animals', 'second', 'should', 'through', 'brought', 'answer', 
  'however', 'picture', 'happened', 'himself', 'under', 'during', 'number', 'second', 
  'better', 'follow', 'almost', 'weather', 'brought', 'problem', 'complete', 
  'believe', 'already', 'subject', 'under', 'hundred', 'himself', 'measure', 
  'several', 'follow', 'around', 'product', 'through', 'brought', 'subject', 
  'weather', 'another', 'problem', 'measure', 'follow', 'complete', 'happened', 
  'already', 'country', 'several', 'animals', 'second', 'general', 'toward', 
  'remember', 'exercise', 'during', 'observe', 'exactly', 'material', 'surface', 
  'describe', 'already', 'believe', 'subject', 'nothing', 'pattern', 'region', 
  'describe', 'toward', 'exercise', 'surface', 'already', 'several', 'subject', 
  'observe', 'general', 'brought', 'toward', 'exercise', 'describe', 'nothing', 
  'material', 'already', 'toward', 'observe', 'fraction', 'region', 'brought', 
  'describe', 'complete', 'observe', 'exactly', 'toward', 'material', 'problem', 
  'fraction', 'describe', 'already', 'toward', 'observe', 'complete', 'subject', 
  'weather', 'brought', 'toward', 'exercise', 'describe', 'nothing', 'material', 
  'already', 'toward', 'observe', 'fraction', 'region', 'brought', 'describe', 
  'complete', 'observe', 'exactly', 'toward', 'material', 'problem', 'fraction', 
  'describe', 'already', 'toward', 'observe', 'complete', 'subject', 'weather'
];

// Hard Words: 8-10 letters
const Hard_Words = [
  'elephant', 'strawberry', 'telephone', 'microscope', 'beautiful', 'dangerous', 
  'yesterday', 'wonderful', 'butterfly', 'tomorrow', 'thunderstorm', 'photograph', 
  'electricity', 'understand', 'everything', 'impossible', 'chocolate', 'university', 
  'neighborhood', 'grandfather', 'grandmother', 'immediately', 'interesting', 
  'professional', 'umbrella', 'underneath', 'nevertheless', 'championship', 
  'extraordinary', 'mathematics', 'communication', 'information', 'temperature', 
  'environment', 'entertainment', 'congratulations', 'circumstances', 'destination', 
  'imagination', 'examination', 'illustration', 'presentation', 'explanation', 
  'competition', 'appreciation', 'concentration', 'interpretation', 'organisation', 
  'qualification', 'accommodation', 'disappointment', 'circumference', 'embarrassment', 
  'unfortunately', 'recommendation', 'acknowledgement', 'correspondence', 
  'infrastructure', 'meteorologist', 'perspective', 'significance', 'substantial', 
  'consequence', 'appropriate', 'availability', 'convenience', 'acquaintance', 
  'achievement', 'alternative', 'application', 'celebration', 'cooperation', 
  'determination', 'exaggeration', 'introduction', 'investigation', 'maintenance', 
  'negotiation', 'opportunity', 'participation', 'performance', 'publication', 
  'recognition', 'replacement', 'requirement', 'satisfaction', 'suggestion', 
  'transportation', 'transformation', 'understanding', 'coincidence', 'distribution', 
  'determination', 'imagination', 'environment', 'professional', 'understanding', 
  'establishment', 'accommodation', 'communication', 'presentation', 'information', 
  'preparation', 'achievement', 'organization', 'entertainment', 'circumstance', 
  'opportunity', 'administration', 'interpretation', 'entertainment', 'concentration', 
  'organization', 'participation', 'modification', 'determination', 'cooperation', 
  'qualification', 'understanding', 'announcement', 'establishment', 'disappointment', 
  'identification', 'interpretation', 'recommendation', 'circumference', 'acknowledgement', 
  'acknowledgment', 'advertisement', 'disappointment', 'organization', 'qualification', 
  'identification', 'investigation', 'accommodation', 'circumference', 'establishment', 
  'announcement', 'communication', 'interpretation', 'understanding', 'opportunity', 
  'participation', 'presentation', 'recognition', 'environment', 'professional', 
  'entertainment', 'determination', 'preparation', 'achievement', 'organization', 
  'interpretation', 'disappointment', 'accommodation', 'communication', 'coincidence', 
  'determination', 'imagination', 'identification', 'investigation', 'interpretation', 
  'organization', 'participation', 'preparation', 'presentation', 'recognition', 
  'recommendation', 'opportunity', 'administration', 'announcement', 'establishment', 
  'circumference', 'accommodation', 'acknowledgment', 'identification', 'investigation', 
  'interpretation', 'understanding', 'entertainment', 'achievement', 'organization', 
  'disappointment', 'communication', 'announcement', 'presentation', 'recommendation', 
  'interpretation', 'environment', 'qualification', 'recognition', 'determination', 
  'opportunity', 'preparation', 'interpretation', 'understanding', 'achievement', 
  'communication', 'organization', 'presentation', 'recognition', 'preparation', 
  'achievement', 'interpretation', 'organization', 'communication', 'entertainment', 
  'administration', 'determination', 'understanding', 'accommodation', 'recognition', 
  'presentation', 'preparation', 'interpretation', 'organization', 'communication', 
  'achievement', 'entertainment', 'administration', 'circumference', 'announcement', 
  'preparation', 'interpretation', 'accommodation', 'understanding', 'recognition', 
  'presentation', 'communication', 'organization', 'achievement', 'entertainment', 
  'administration', 'determination', 'circumference', 'accommodation', 'announcement', 
  'preparation', 'interpretation', 'organization', 'communication', 'achievement'
];

// Ultimate Words: 10+ letters
const Ultimate_Words = [
  'antidisestablishmentarianism', 'floccinaucinihilipilification', 
  'pneumonoultramicroscopicsilicovolcanoconiosis', 'supercalifragilisticexpialidocious', 
  'pseudopseudohypoparathyroidism', 'incomprehensibilities', 'uncharacteristically', 
  'hippopotomonstrosesquipedaliophobia', 'thyroparathyroidectomized', 
  'dichlorodifluoromethane', 'radioimmunoelectrophoresis', 'psychoneuroendocrinological', 
  'spectrophotofluorometrically', 'hepaticocholangiocholecystenterostomies', 
  'honorificabilitudinitatibus', 'electroencephalographically', 'otorhinolaryngological', 
  'immunoelectrophoretically', 'psychophysicotherapeutics', 'thyrocalcitonin', 
  'phosphatidylethanolamine', 'tetrahydrocannabinol', 'antitransubstantiationalist', 
  'parastratiosphecomyiastratiosphecomyioides', 'uvulopalatopharyngoplasty', 
  'ventriloquistically', 'duodenocholedochotomy', 'polytetrafluoroethylene', 
  'spectroheliokinematograph', 'psychopharmacotherapeutics', 'pharyngolaryngoesophagectomy', 
  'hepaticocholangiocholecystenterostomies', 'laryngotracheobronchitis', 
  'antitransubstantiationalist', 'psychoneuroendocrinological', 'ventriloquistically', 
  'radioimmunoelectrophoresis', 'electroencephalographically', 'otorhinolaryngological', 
  'immunoelectrophoretically', 'psychophysicotherapeutics', 'thyrocalcitonin', 
  'phosphatidylethanolamine', 'tetrahydrocannabinol', 'parastratiosphecomyiastratiosphecomyioides', 
  'spectroheliokinematograph', 'psychopharmacotherapeutics', 'pharyngolaryngoesophagectomy', 
  'laryngotracheobronchitis', 'pseudopseudohypoparathyroidism', 'spectrophotofluorometrically', 
  'hepaticocholangiocholecystenterostomies', 'honorificabilitudinitatibus', 'dichlorodifluoromethane', 
  'pseudopseudohypoparathyroidism', 'floccinaucinihilipilification', 'psychoneuroendocrinological', 
  'hepaticocholangiocholecystenterostomies', 'honorificabilitudinitatibus', 'pneumonoultramicroscopicsilicovolcanoconiosis', 
  'supercalifragilisticexpialidocious', 'incomprehensibilities', 'hippopotomonstrosesquipedaliophobia', 
  'thyroparathyroidectomized', 'dichlorodifluoromethane', 'electroencephalographically', 'otorhinolaryngological', 
  'immunoelectrophoretically', 'psychophysicotherapeutics', 'thyrocalcitonin', 'phosphatidylethanolamine', 
  'tetrahydrocannabinol', 'antitransubstantiationalist', 'parastratiosphecomyiastratiosphecomyioides', 'uvulopalatopharyngoplasty', 
  'ventriloquistically', 'duodenocholedochotomy', 'polytetrafluoroethylene', 'spectroheliokinematograph', 
  'psychopharmacotherapeutics', 'pharyngolaryngoesophagectomy', 'hepaticocholangiocholecystenterostomies', 
  'laryngotracheobronchitis', 'antidisestablishmentarianism', 'floccinaucinihilipilification', 'pneumonoultramicroscopicsilicovolcanoconiosis', 
  'supercalifragilisticexpialidocious', 'pseudopseudohypoparathyroidism', 'incomprehensibilities', 'uncharacteristically', 
  'hippopotomonstrosesquipedaliophobia', 'thyroparathyroidectomized', 'dichlorodifluoromethane', 'radioimmunoelectrophoresis', 
  'psychoneuroendocrinological', 'spectrophotofluorometrically', 'hepaticocholangiocholecystenterostomies', 'honorificabilitudinitatibus', 
  'electroencephalographically', 'otorhinolaryngological', 'immunoelectrophoretically', 'psychophysicotherapeutics', 
  'thyrocalcitonin', 'phosphatidylethanolamine', 'tetrahydrocannabinol', 'antitransubstantiationalist', 'parastratiosphecomyiastratiosphecomyioides', 
  'uvulopalatopharyngoplasty', 'ventriloquistically', 'duodenocholedochotomy', 'polytetrafluoroethylene', 'spectroheliokinematograph', 
  'psychopharmacotherapeutics', 'pharyngolaryngoesophagectomy', 'hepaticocholangiocholecystenterostomies', 'laryngotracheobronchitis', 
  'antitransubstantiationalist', 'psychoneuroendocrinological', 'ventriloquistically', 'radioimmunoelectrophoresis', 
  'electroencephalographically', 'otorhinolaryngological', 'immunoelectrophoretically', 'psychophysicotherapeutics', 
  'thyrocalcitonin', 'phosphatidylethanolamine', 'tetrahydrocannabinol', 'parastratiosphecomyiastratiosphecomyioides', 
  'spectroheliokinematograph', 'psychopharmacotherapeutics', 'pharyngolaryngoesophagectomy', 'laryngotracheobronchitis', 
  'pseudopseudohypoparathyroidism', 'spectrophotofluorometrically', 'hepaticocholangiocholecystenterostomies', 
  'honorificabilitudinitatibus', 'dichlorodifluoromethane', 'pseudopseudohypoparathyroidism', 'floccinaucinihilipilification', 
  'psychoneuroendocrinological', 'hepaticocholangiocholecystenterostomies', 'honorificabilitudinitatibus', 
  'pneumonoultramicroscopicsilicovolcanoconiosis', 'supercalifragilisticexpialidocious', 'incomprehensibilities', 
  'hippopotomonstrosesquipedaliophobia', 'thyroparathyroidectomized', 'dichlorodifluoromethane', 'electroencephalographically', 
  'otorhinolaryngological', 'immunoelectrophoretically', 'psychophysicotherapeutics', 'thyrocalcitonin', 'phosphatidylethanolamine', 
  'tetrahydrocannabinol', 'antitransubstantiationalist', 'parastratiosphecomyiastratiosphecomyioides', 'uvulopalatopharyngoplasty', 
  'ventriloquistically', 'duodenocholedochotomy', 'polytetrafluoroethylene', 'spectroheliokinematograph', 'psychopharmacotherapeutics', 
  'pharyngolaryngoesophagectomy', 'hepaticocholangiocholecystenterostomies', 'laryngotracheobronchitis'
];
