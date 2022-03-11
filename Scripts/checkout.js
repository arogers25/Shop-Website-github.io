let numItems = 0;
if (localStorage.getItem("totalItems") == null) localStorage.setItem("totalItems", 0);
numItems = parseInt(localStorage.getItem("totalItems"));

let oldPrice = 0;
if (localStorage.getItem("totalPrice") == null) localStorage.setItem("totalPrice", 0);
oldPrice = parseInt(localStorage.getItem("totalPrice"));
let newPrice = oldPrice;

document.getElementById('itemsAmount').innerHTML = numItems;
document.getElementById('cartTotal').innerHTML = newPrice;

function getDiscount(code)
{
  if (code == "10OFF") return oldPrice - (0.10*oldPrice);
  if (code == "20OFF") return oldPrice - (0.20*oldPrice);
  if (code == "FREE") return 0;
  return oldPrice;
}

function resetItems()
{
  numItems = 0;
  localStorage.setItem("totalItems", numItems);
  document.getElementById('itemsAmount').innerHTML = numItems;
  oldPrice = 0;
  newPrice = oldPrice;
  localStorage.setItem("totalPrice", newPrice)
  document.getElementById('cartTotal').innerHTML = newPrice;
}


function applyDiscount()
{
  newPrice = getDiscount(document.getElementById('discountField').value);
  document.getElementById('cartTotal').innerHTML = newPrice;
}
