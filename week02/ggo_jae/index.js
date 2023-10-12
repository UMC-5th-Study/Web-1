var name2 = document.getElementById("name2");
var nickname2 = document.getElementById("nickname2");
var email2 = document.getElementById("email2");
var password2 = document.getElementById("password2");
var passwordck2 = document.getElementById("passwordck2");
var button = document.getElementById("button");
function checkn(){
  var name = document.getElementById("name").value;
  if (name.length !== 0){
    name2.innerText = "멋진 이름이네요!";
  }else{
    name2.innerText = "필수 입력 항목입니다.";
  }
  updateButtonState();
}

function checknick(){
  var nickname = document.getElementById("nickname").value;
  if ((2 <= nickname.length) && (nickname.length<= 5)){
    nickname2.innerText = "멋진 닉네임이군요"
  }else{
    nickname2.innerText = "닉네임은 2~5글자로 구성해주세요"
  }
  updateButtonState();
}

function checkemail(){
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(email)){
    email2.innerText = "올바른 이메일 형식입니다."
  }else{
    email2.innerText = "올바른 이메일 형식이 아닙니다."
  }
  updateButtonState();
}

function checkp(){
  var password = document.getElementById("password").value;
  var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  if (passwordRegex.test(password)){
    password2.innerText = "안전한 비밀번호입니다."
  }else{
    password2.innerText = "영어+숫자+특수문자를 조합하여 작성해주세요."
  }
  updateButtonState();
}

function checkpck(){
  var password = document.getElementById("password").value;
  var passwordck = document.getElementById("passwordck").value;
  
  if (password === passwordck){
    passwordck2.innerText = "비밀번호가 일치합니다!"
  }else{
    passwordck2.innerText = "비밀번호가 일치하지 않습니다."
  }
  updateButtonState();
}
function updateButtonState() {
  if (
    passwordck2.innerText == "비밀번호가 일치합니다!" &&
    password2.innerText == "안전한 비밀번호입니다." &&
    email2.innerText == "올바른 이메일 형식입니다." &&
    nickname2.innerText == "멋진 닉네임이군요" &&
    name2.innerText == "멋진 이름이네요!"
  ) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

updateButtonState();

function modalopen(){
  modal.style.display = 'flex'
}
function modalclose(){
  modal.style.display = 'none'
}
