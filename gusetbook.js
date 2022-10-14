// gusetbook.html에 연결
function sup() {
	alert('Clap!')
}

const sendButton = document.querySelector('#send-button');

sendButton.addEventListener('click', () => {
  const input = document.querySelector('#input');
  const text = input.value.trim();

  if (text !== '') {
    addToList(text);
    input.value = '';
    input.focus();
  }
});

function addToList(text) {
  const list = document.querySelector('#list');

  const newListItem = document.createElement('li');
  newListItem.classList.add('book-list'); 

  newListItem.innerHTML = text;

  list.appendChild(newListItem);
}
