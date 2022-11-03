// gusetbook.html에 연결
function sup() {
	alert('Clap!')
}

const addRe = document.querySelector('#add-re');

addRe.addEventListener('click', () => {
  const GB = document.querySelector('#gb');
  const text = input.value.trim();

  if (text !== '') {
    addToRep(text);
    input.value = '';
    input.focus();
  }
});

function addToRep(text) {
  const book = document.querySelector('#book');

  const newBookItem = document.createElement('li');
  newListItem.classList.add('book-list'); 

  newListItem.innerHTML = text;

  list.appendChild(newListItem);
}
