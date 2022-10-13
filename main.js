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

	list.addEventListener("click", function() {
		list.style.textDecoration = "line-through";
	})
}

// 달력
// 연, 월 불러오기
const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.year-month').textContent = `${viewYear}. ${viewMonth + 1}.`;

// 날짜 불러오기
const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

// if문 안에 데이터 배열
if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);

  dates.forEach((date, i) => {
    dates[i] = `<div class="date">${date}</div>`;
  })
  
  document.querySelector('.dates').innerHTML = dates.join('');
