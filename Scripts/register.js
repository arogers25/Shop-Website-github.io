let userList = JSON.parse(localStorage.getItem("userList"));

//localStorage.setItem("userList", JSON.stringify(userList));

function existingUser(name)
{
    for (let i = 0; i < userList.users.length; i++)
    {
        //Compare name strings in upper case
        if (userList.users[i].name.toUpperCase() == name.toUpperCase()) return true;
    }
    return false;
}

function registerAccount()
{
  let usernameId = document.getElementById("usernameBox").value;
  let passwordEntry = document.getElementById("passwordBox").value;
  if (usernameId == "")
  {
    alert("You cannot make an account without a username!");
    return;
  }
  if (passwordEntry == "")
  {
    alert("You cannot make an account without a password!");
    return;
  }

  if (existingUser(usernameId))
  {
    alert("User already exists");
    return;
  } else
  {
    let newUser = {"name": usernameId, "password": passwordEntry, "amount": 0, "price": 0};
    userList.users.push(newUser);
    localStorage.setItem("userList", JSON.stringify(userList));
    alert("Account successfully created! Username: " + usernameId + " Password: " + passwordEntry);
  }
}
