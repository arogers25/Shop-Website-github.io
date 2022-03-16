let userList = JSON.parse(localStorage.getItem("userList"));
let userId = localStorage.getItem("userId");

let oldPrice = userList.users[userId].price;
let newPrice = oldPrice;

document.getElementById('itemsAmount').innerHTML = userList.users[userId].amount;
document.getElementById('cartTotal').innerHTML = newPrice;

function getDiscount(code)
{
  if (code == "10OFF") return oldPrice - (0.10*oldPrice);
  if (code == "20OFF") return oldPrice - (0.20*oldPrice);
  if (code == "FREE") return 0;
  if (code != "") alert("Please enter a valid discount code");
  return oldPrice;
}

function resetItems()
{
  userList.users[userId].amount = 0;
  document.getElementById('itemsAmount').innerHTML = userList.users[userId].amount;
  oldPrice = 0;
  newPrice = oldPrice;
  userList.users[userId].price = 0;
  document.getElementById('cartTotal').innerHTML = newPrice;
  localStorage.setItem("userList", JSON.stringify(userList));
}


function applyDiscount()
{
  newPrice = getDiscount(document.getElementById('discountField').value);
  document.getElementById('cartTotal').innerHTML = newPrice;
}
