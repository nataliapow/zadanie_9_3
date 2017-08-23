var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.",
	dinosaur = 'triceratops',
	dinosaurUpperCased = dinosaur.toUpperCase(),
	textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased),
	halfSentence = textCharsAfter.length/2,
	halfText = textCharsAfter.slice(0, halfSentence),

console.log(halfText);