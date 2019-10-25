'use strict';

'use strict';

const images = [
	{
		title: 'Cat',
		desc: 'Cat is praying for some fish',
		file: 'cat.jpg'
    },
    {
		title: 'Owl',
		desc: 'Owl is checking out if the cat has gone crazy',
		file: 'owl.jpg'
    },
    {
		title: 'Panda',
		desc: 'Omg, I do not care just wanna sleep',
		file: 'panda.jpg'
    },
    {
		title: 'Savanna',
		desc: 'Animals are running to see if the cat will have fish',
		file: 'savanna.jpg'
    },
    {
		title: 'Tiger',
		desc: 'No fish but cat became a tiger',
		file: 'tiger.jpg'
	},
]

let num = 0;


function next() {
    let slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.style.backgroundImage = 'url(images/' + images[num].file + ')';
}
next();


function prev() {
    let slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 0;
    }
    slider.style.backgroundImage = 'url(images/' + images[num].file + ')';
}
prev();

let thumb = document.getElementsByClassName("thumbnails");

generateThumbnails = function () {
    images.forEach(function(images) {
        let thumb = document.createElement('div');
        thumb.style.backgroundImage = 'url(images/' + images.file + ')';
        thumb.appendChild(thumb);
    });
}
generateThumbnails();