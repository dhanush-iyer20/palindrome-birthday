import "./styles.css";
var date = document.getElementById("date");

document.getElementById("btn").addEventListener("click", () => {
  var status = true;
  var sum = 0;
  const dateArr = date.value.split("").filter((item) => item !== "-");
  console.log(dateArr);
  for (let i = 0; i < dateArr.length; i++) {
    if (dateArr[i] != dateArr[dateArr.length - i - 1]) {
      return (document.getElementById("text").innerText = "not a palindrome");
    }
  }
  document.getElementById("text").innerText = "is a palindrome";
});
