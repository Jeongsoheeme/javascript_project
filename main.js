//랜던번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다


let computerNum = 0
let playbutton = document.getElementById("playbutton");
let userinput = document.getElementById("userinput");
let reset_button = document.getElementById("reset_button");
let chances = 10;
let gameover = false;
let chancearea = document.getElementById("chance_area");
let history=[];

playbutton.addEventListener("click",play)
reset_button.addEventListener("click",reset)
userinput.addEventListener("focus",function(){userinput.value})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*10)+1;
    console.log("정답",computerNum);

}


function play(){
    let uservalue = userinput.value;

    if(uservalue<1 || uservalue>100){
        result_area.textContent="1과 100사이 숫자를 입력해 주세요";
        return;
    }
    
    if(history.includes(uservalue)){
        result_area.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해 주세요";
        return;
    }


    chances --;

    chancearea.textContent=`남은기회:${chances}번`;
    console.log("chance", chances);

    if(uservalue < computerNum){
        result_area.textContent = "up"
        console.log("up")
    }else if(uservalue > computerNum){
        result_area.textContent = "down"
    }else {
        result_area.textContent = "good"        
    }
    history.push(uservalue);

    if(chances < 1){
        gameover = true
    }

    if (gameover == true){
        playbutton.disabled = true
    }
    
    if(uservalue==computerNum){
        playbutton.disabled = true;
    }
}

function reset(){
    userinput.value = "";
    pickRandomNum();

    result_area.textContent="결과값이 여기 나옵니다!";
}

function userinput_reset(){
    userinput.value = "";
}


pickRandomNum();