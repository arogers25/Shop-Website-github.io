let userList = JSON.parse(localStorage.getItem("userList"));
let userId = localStorage.getItem("userId");
//localStorage.setItem("userList", JSON.stringify(userList));
document.getElementById('itemsAmount').innerHTML = userList.users[userId].amount;

function isValid(number)
{
  if (number == "")
  {
    alert("Please enter an amount");
    return false;
  }
  if (number <= 0)
  {
    alert("Please enter an amount greater than 0");
    return false;
  }
  if (isNaN(number))
  {
    alert("Please enter a valid amount");
    return false;
  }
  return true;
}

function addToCart(amount, price)
{
    userList.users[userId].amount += parseInt(amount);
    userList.users[userId].price += parseInt(price)*amount;
    localStorage.setItem("userList", JSON.stringify(userList));
    document.getElementById('itemsAmount').innerHTML = userList.users[userId].amount;
    document.getElementById('cartTotal').innerHTML = userList.users[userId].price;
}

function resetItems()
{
  userList.users[userId].amount = 0;
  userList.users[userId].price = 0;
  localStorage.setItem("userList", JSON.stringify(userList));
  document.getElementById('itemsAmount').innerHTML = 0;
  document.getElementById('cartTotal').innerHTML = 0;
}
