const clock = document.querySelector("#clock"); // HTML 에서 #clock 선택자를 가져온다.


function getClock(){ // 시계 기능을 구현하는 함수
    const date = new Date(); // new(최신 정보를 불러온다.) Date(날짜에 대한 정보를 받아온다.) -> date 변수로 선언

    const hours = String(date.getHours()).padStart(2, "0"); // date 변수에서 시,분,초 를 가져온다.
    const minutes = String(date.getMinutes()).padStart(2, "0"); // padStart 함수를 사용하여 자릿수를 2자리로 설정
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 2자리 미만의 수는 공백을 "0" 으로 채운다.
    clock.innerText = `${hours}:${minutes}:${seconds}`; // #clock 선택자에 해당 시간 값을 넣어준다.
}

getClock(); // refresh 시에 딜레이를 방지하기 위해 일단 함수를 한번 실행한다.
setInterval(getClock, 1000); // 1초 뒤부터 1초(1000ms) 에 한번씩 getClock 함수를 실행한다.

// padStart : string 의 앞에 원하는 padding 을 추가하는 함수
// padEnd : string의 뒤에 원하는 padding 을 추가하는 함수