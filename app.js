let users = [
  { name: "Sam", email: "sam@gmail.com", phone: "123-456-1234" },
  { name: "Bob", email: "bob@gmail.com", phone: "+456715126115" },
  { name: "Amanda", email: "am1981@gmail.com", phone: "+48945161216" },
  { name: "Rick", email: "rick@gmail.com", phone: "+4516256154878" },
    { name: "Bibi", email: "bibi1999@gmail.com", phone: "+89542135484" },
    { name: "Mimi", email: "mimi-45@gmail.com", phone: "+89542135484" },
];

const usersContainer = document.getElementById("users");
const searchField = document.getElementById("search");
const selectedUser = document.getElementById("selectedUser");
const selectedUserName = document.getElementById("selected-user__name");
const selectedUserPhone = document.getElementById("selected-user__phone");
const selectedUserEmail = document.getElementById("selected-user__email");


$("#search").on("input", function (ev) {
  clearUsers(usersContainer);

  let userInput = ev.target.value;
  if (!userInput == "") {
    let filteredUsers = users.filter((item) => {
        return item.name.toLowerCase().includes(userInput.toLowerCase());
      });
      renderingUsers(filteredUsers);

      // Reacting on click by card
      let elements = $(usersContainer).find("div");
      elements.each(function(){
        this.addEventListener("click", function(){
          selectedUserName.innerText = $(this).find(".users__name").text();
          selectedUserPhone.innerText = $(this).find(".users__email").text();
          selectedUserEmail.innerText = $(this).find(".users__phone").text();
          selectedUser.classList.remove("hide-block")
          searchField.value = $(this).find(".users__name").text();
          clearUsers(usersContainer);
        })
      });

  }
});

$(".users").click(function(){
  console.log("clicked");
})

function renderingUsers(searchRequest) {
  clearUsers(usersContainer);

  searchRequest.map((item) => {
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    div.classList.add("users__card");

    p1.classList.add("users__name");
    p1.innerText = item.name;

    p2.classList.add("users__email");
    p2.innerText = item.email;

    p3.classList.add("users__phone");
    p3.innerText = item.phone;

    div.append(p1, p2, p3);

    usersContainer.append(div);
  });
}

function clearUsers(el) {
  el.innerHTML = "";
}
