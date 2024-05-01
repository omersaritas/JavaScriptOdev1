const date = new Date();

let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()
let second = date.getSeconds()
if (0 >= second <=9) {
    second += 0
}
let minute = date.getMinutes()
if (0 >= minute <=9) {
    minute += 0
}
let hour = date.getHours()

let currentDate = `Gün => ${day}/${month}/${year} --- Saat=> 
${hour}.${minute}.${second}`

let calendar = document.querySelector("#myClock")

calendar.innerHTML = currentDate

let fullName = prompt("!Lütfen Ad ve Soyadınızı Giriniz!")

let myName = document.querySelector("#myName")

myName.innerHTML = fullName.toUpperCase()
