
/**
  * @e {HTMLEvent}
 */
handleClick = function(e) {
  if(e.target.className == 'songs') {
    const kar = 'karaoke.html';
    const index = getIndex(e.target);
    window.open(`location:8000/${kar}?q=${index}`);
  }
}

const getIndex = (e) => {
  return e.getAttribute('data-index');
}


document.addEventListener('click', handleClick);
