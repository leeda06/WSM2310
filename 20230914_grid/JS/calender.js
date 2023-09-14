// 이번달

// 현재 날짜 / 시각 객체 만들자
var now = new Date();

// 현재 월
var year = now.getFullYear();
// 현재 년
var month = now.getMonth() + 1;

var date = now.getDate();

const datesContainerDiv = document.querySelector(".dates.container");


const setCalender = (year, month) => {

    // 제목달 보여주자!
    // html -> js
    var titleMonthDiv = document.querySelector('.month');
    titleMonthDiv.innerHTML = `${month}월`;

    // 달력을 만들자
    // 1일의 요일 
    var firstDateDay = new Date(year, month - 1, 1).getDay();
    // 마지막 일수
    var lastDate = new Date(year, month, 0).getDate();

    // .data.item{$}*lastDate
    // for i * lastDay
    for (let date = 1; date <= lastDate; date++) {
        // <div class = "data item">date</div>
        let dateItemDiv = document.createElement("div");    //<div></div>
        dateItemDiv.classList.add("date");                  //<div> class="date"></div>
        dateItemDiv.classList.add("item");                  //<div> class="date item"></div>
        dateItemDiv.innerHTML = date;                       //<div> class="date item">날짜</div>
        // HTML에 .date.container 자식으로 낳자
        datesContainerDiv.appendChild(dateItemDiv);

    }
    // 1일을 firstDataDay로 옮기자
    // .dates.container의 자식중 첫째자식 스타일 주기 (style grid-column-start: 6)
    let firstDateDiv = datesContainerDiv.firstElementChild;
    // CSS grid-column-start : 5 / 6;
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

}
setCalender(year, month);

// < 이전달
// > 이후달