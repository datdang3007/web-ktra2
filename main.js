// Bài 1: Tính tổng các giá trị trong mảng -> trả về định dạng 'x,xxx...$
console.log("Bài 1:");
var price = ["1,234$", "1,001,231$", "231$"] // 1,002,696$
var sumPrice = 0
var sum = price.map((val) => sumPrice += +val.split("$")[0].split(",").join(""))
var a = String(sumPrice)
var dem = 0
var newPrice = []
for (var i = a.length - 1; i>=0; i--) {
  newPrice.unshift(a[i])
  dem++
  if(dem === 3) {
    newPrice.unshift(",")
    dem = 0
  }
}
if (newPrice[0] === ",") {
  newPrice.shift()
}
console.log(newPrice.join("") + "$")

// Bài 2: in ra các string có nhiều từ nhất - ví dụ "this is a word" -> có 4 từ
console.log("Bài 2:");
var case1 = ["this is a word", "so good", "very bad or unpleasant", "to give somebody support courage or hope"]
var case2 = ["this is a word", "so good", "very bad or unpleasant"]

var longWord1 = case1.map(val => {
  return val.split(" ")
}).reduce((acc, val) => {
  if (acc.length < val.length) {
    acc = val
  }
  return acc
}, "").join(" ")
console.log(longWord1);

var longWord2 = case2.map(val => {
  return val.split(" ")
}).reduce((acc, val) => {
  if (acc.length < val.length) {
    acc = val
  }
  return acc
}, "").join(" ")
console.log(longWord2);

// Bài 3: Viết function random số tự nhiên lẻ từ a -> b (bao gồm cả b)
console.log("Bài 3:");
var randomNumber = (a, b) => {
  var numberRandom = Math.floor(Math.random() * (b - a + 1)) + a
  if (numberRandom%2===0){
    return numberRandom
  }
  return randomNumber(a, b)
}
console.log(randomNumber(1, 1000));

// Bài 4: Viết function random password gồm n kí tự từ a-z, mỗi kí tự là ngẫu nhiên
console.log("Bài 4:");
var randomPassword = (n) => {
  var password = "";
  var listWord = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0 ; i < n ; i++) {
    password += listWord.charAt(Math.floor(Math.random() * listWord.length));
  }
  return password;
}
console.log(randomPassword(3))

// Bài 5: Cho mảng gồm thông tin user và số lần click của user, in ra object gồm name và lần click cuối cùng
console.log("Bài 5:");
var user = [
  {name: "user1", clicked: 3},
  {name: "user2", clicked: 10},
  {name: "user1", clicked: 2},
  {name: "user3", clicked: 16},
  {name: "user2", clicked: 2},
  {name: "user3", clicked: 23},
  {name: "user3", clicked: 12},
  {name: "user3", clicked: 100},
]

var userLastClicked = user.reduce((acc, val) => {
  if (val in acc) {
    acc[val.name] = val.clicked
  } else {
    acc[val.name] = val.clicked
  }
  return acc
}, [])
console.log(userLastClicked);