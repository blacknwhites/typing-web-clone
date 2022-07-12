let target = document.querySelector("#dynamic");
// let 변수선언, dynamic이라는 아이디를 가지는 객체를 변수로 가지는 변수

function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    // 랜덤한 숫자를 floor로 소수점 버림 후 할당 
    let selectStringArr = selectString.split("");
    // ""안을 기준으로 분리해서 배열에 각각 저장 , 위의 경우 단어하나 쪼개져 배열에 저장됨
    // console.log(selectStringArr)로 확인가능 

    return selectStringArr;

}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
            dynamic(randomArr);
        }, 80);
    }
    else {
        setTimeout(resetTyping, 3000);
    }
}
// textContent:텍스트 출력 후 반환, shift:배열의 첫번째 요소 제거 후 반환
// settimeout: 지연함수 , 위에서는 재귀함수 활용
dynamic(randomString());

function blink() {
    target.classList.toggle("active");
}

// toggle, 전등 스위치를 껐다 켰다 하는 행위 처럼, 0과 1이 반복되는 행위
// 즉, 기존 값이 0이었다면 1로 바뀌고 기존 값이 1이었다면, 0으로 바뀌게 됩니다.
// 그래서 toggle 메서드는 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가하는 메서드
// active라는 class를 껏다 켰다하는 함수

setInterval(blink, 500);
//주기적으로 인자 실행하는 함수