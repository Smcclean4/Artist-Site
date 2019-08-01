$(document).ready(function() {

});

const images = ['https://i.imgur.com/8T9VSVa.jpg', 'https://i.imgur.com/erkPzsj.jpg', 'https://i.imgur.com/sJcD6J9.jpg', 'https://i.imgur.com/6oL7z0o.jpg',
'https://i.imgur.com/hyoXpef.jpg', 'https://i.imgur.com/U3KngPK.jpg'];
const randoImg = Math.round(Math.random() * images.length);
const bannerImg = document.getElementById('banner').style.backgroundImage = 'url(' + images[randoImg] + ')';

function shuffle() {
    
}

shuffle();