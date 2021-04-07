const percurssion = [ 'hihat','snare', 'openhat','boom', 'tom', 'ride',  ];

window.onload = function() {
	start(percurssion);
};


const play = (percurssion) => {
	const audio = document.getElementById(`${percurssion}`);
	console.log(audio);
	audio.currentTime = 0;
	audio.play();
};

const start = (list) => {
	const sect = document.getElementById('section');
	console.log(sect);

	list.map((percurssion) => {
		const element = document.createElement('div');
		element.setAttribute('id', percurssion);
		element.setAttribute('onclick', `play('${percurssion}')`);
		element.setAttribute('style', `background-image:url(images/${percurssion}.png)`);

		console.log(element);
		sect.appendChild(element);
	});
};
