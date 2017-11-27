const songMap = {
	"0" : "https://youtu.be/nMDXPAM8RwE",
	"1" : "https://www.youtube.com/watch?v=kXXQVir7yTw",
	"2" : "https://www.youtube.com/watch?v=jLA_OvsSGQs",
	"3" : "https://www.youtube.com/watch?v=s6z1xazpGJ4",
	"4" : "https://www.youtube.com/watch?v=wsB1_UGiVoU",
	"5" : "https://www.youtube.com/embed/uqaOdIyEUrA",
}

const urlSti = location.href;
console.log(urlSti);

const makeEmbed = (url) => {
  const fram = document.createElement('div');
  fram.innerHTML = `<iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe>`;
  return fram;
}

const embedVideo = () => {
  const ele = makeEmbed(songMap[urlSti.charAt(urlSti.length-1)]);
  console.log(ele);
  const karaEl = document.getElementById('karaoke');

  karaEl.appendChild(ele);
}

embedVideo();