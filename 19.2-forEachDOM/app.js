const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const newOL = document.createElement("ol");
newOL.setAttribute("style", "list-style-type: none");
document.body.appendChild(newOL);

users.forEach((user) => {
  const newLI = document.createElement("li");
  newLI.setAttribute("data-id", user.id);
  newLI.innerText = user.firstName + " " + user.lastName;
  newOL.appendChild(newLI);
});
