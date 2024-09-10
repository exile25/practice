function aboutUs(){
    alert("远程库地址：https://github.com/exile25/practice.git.");
}

function index(){
    if(document.getElementById('home').href=="file:///D:/idea/vs%20code/runoob/first-html.html")
        alert("You're already on our homepage!");
    else
        alert("Welcome to our website!");
}

function Time(){
    let today = new Date();

    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
    alert("当前北京时间: " + time);
}

function MyDate(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    alert("今天是: " + date);
}

function Boring(){
    alert("别点！\n\n还没做好这个功能呢！");
}
// button.removeEventListener('click',MyDate);


function sayTime(hours) {
    if (hours < 8) {
        return "早上好！愿你今天充满活力！";
    } else if (hours < 12) {
        return "上午好！保持专注！";
    } else if (hours < 18) {
        return "下午好！坚持下去！";
    } else if(hours<22){
        return "傍晚好！回顾今天，展望明天！";
    }
    else{
        return "夜深了，注意休息！"+hours+"点了！";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var now=new Date();
    var hours=now.getHours();

    var h1=document.querySelector('.theme1');

    var greeting=document.createElement('span')
    greeting.className='greeting';
    greeting.textContent=sayTime(hours);

    h1.appendChild(greeting);
});