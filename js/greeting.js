const loginForm = document.querySelector("#login-form"); // 각 선택자를 JS 로 불러온다.
const loginInput = document.querySelector("#login-form input"); // 각 선택자를 JS 로 불러온다.
const greeting = document.querySelector("#greeting"); // 각 선택자를 JS 로 불러온다.

const HIDDEN_CLASSNAME = "hidden"; // CSS 의 hidden 선택자를 변수로 선언한다.
const USERNAME_KEY = "username"; // username 
const savedUsername = localStorage.getItem(USERNAME_KEY); // savedUsername 변수를 선언한다.

function onLoginSubmit(event) { // 값을 submit(입력) 받았을때 실행되는 함수
    event.preventDefault(); // 브라우저의 기본 동작을 막아주는 함수
    const username = loginInput.value; // loginInput 의 value 값을 username 이라는 변수로 정의한다.
    localStorage.setItem(USERNAME_KEY, username); //  localStorage에 USERNAME_KEY 와 username을 저장하는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME); // #login_form 에 .hidden 클래스를 추가하고, 그에 따라 hidden의 css 값이 작동한다.
    paintGreetings(username); // paintGreetings 함수를 실행한다.
}

function paintGreetings(username) { // Greeting 을 해주는 함수
    greeting.innerText = `${savedUsername}님, 반가워요`; // greeting 선택자에 `` 안의 텍스트를 입력해준다.
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting 선택자에 있던 .hidden 을 제거한다.
}

// 실제 구현부

if (savedUsername === null) { // 해당 값이 참이라면 -> #login-form 이 보이게 될 것이다.
    loginForm.classList.remove(HIDDEN_CLASSNAME); // loginform 에서 .hidden 을 삭제한다.
    loginForm.addEventListener("submit", onLoginSubmit); // submit 작업을 처리한다.
} else { // 그게 아니라면 -> username 이 localStorage 에 저장되어 있으므로 #greeting 이 보이게 될 것이다.
    paintGreetings(savedUsername); // 함수를 실행한다.
}