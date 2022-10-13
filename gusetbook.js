// gusetbook.html에 연결
function sup() {
	alert('Clap!')
}

const addRe = document.querySelector('#re');
addRe.addEventListner('click', () => {
	const gb = document.querySelector('#gb'); //입력창 변수로 불러오기 
	const text = input.value.trim(); // 입력 받아오기

	if (text !== '') {
		addGueBo(text);
		input.value = ''; // 빈칸으로 리셋
		input.focus();
	}
});

function addGueBo(text) {
	const book = document.querySelector('#book');

	const newBookItem = document.createElement('li'); // 새로운 li 만들기
	newBookItem.classList.add('book-list'); // 클래스 추가

	newBookItem.innerHTML = text; // 입력 문자 삽입

	FileList.appendChild(newBookItem); // 리스트에 새로 만든 book 추가
}
