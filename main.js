// main.html에 연결
function sup() {
	alert('Clap!')
}

const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', () => {
	const input = document.querySelector('#input');
	const text = input.value.trim(); //사용자 입력 불러오기

	if (text !='') { // 입력창 빈칸 확인
		addToList(text);
		input.value = ''; // 입력창 리셋
		input.focus();
	}
});

function addToList(text) {
	const list = document.querySelector('#list');

	const newListItem = document.createElement('li'); // 새로운 li 생성
	newListItem.classList.add('list-item'); // list-item 클래스 추가

	newListItem.innerHTML = text; // li 사이에 입력 문자 넣기

	list.appendChild(newListItem); // 리스트에 추가
}
