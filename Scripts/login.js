let list, text;

if (localStorage.getItem("loggedIn") == null) localStorage.setItem("loggedIn", false);
if (localStorage.getItem("loggedIn") == "true") window.location.href = "../index.html";

if (localStorage.getItem("userList") == null)
{
    text = '{"users":[{"name": "Account1", "password": "access1", "amount": 0, "price": 0}, {"name": "Account2", "password": "access2", "amount": 0, "price": 0}]}';
    list = JSON.parse(text);
    localStorage.setItem("userList", JSON.stringify(list));
}
    else
{
    list = JSON.parse(localStorage.getItem("userList"));
}

function showUserList()
{
    let loginList = document.getElementById("loginList");
    loginList.innerHTML = "";
    for (let i = 0; i < list.users.length; i++)
    {
        loginList.innerHTML += ('Name: "' + list.users[i].name + "''");
        loginList.innerHTML += (' Password: "' + list.users[i].password + '"');
        loginList.innerHTML += ('&nbsp <button type="button" onclick="removeUser(' + i + ')">Delete</button>'); // Replace with createElement onclick
        loginList.innerHTML += "<br>";
    }
}
showUserList();

function removeUser(id)
{
    list.users.splice(id, 1);
    localStorage.setItem("userList", JSON.stringify(list));
    showUserList();
}

function findUserId(name)
{
    for (let i = 0; i < list.users.length; i++)
    {
        if (list.users[i].name == name) return i;
    }
    return -1;
}

function attemptLogin()
{
    let usernameId = findUserId(document.getElementById("usernameBox").value);
    let passwordEntry = document.getElementById("passwordBox").value;
    if (usernameId >= 0)
    {
        if (list.users[usernameId].password == passwordEntry)
        {
            localStorage.setItem("userId", usernameId);
            localStorage.setItem("loggedIn", true);
            window.location.href = "../index.html";
            return;
        }
    }
    alert("Incorrect");
}
