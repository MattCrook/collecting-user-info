const addressContainer = document.querySelector("#addressList");

const captureUserInfo = () => {
  const enterName = document.getElementById("fullName");
  const enterAddress = document.getElementById("address");

  addressContainer.innerHTML += `
  <section>
    <p>Name: ${enterName.value}</p>
    <p>Address: ${enterAddress.value}</p>
  </section>
  `;
  enterName.value = "";
  enterAddress.value = "";
};

document
  .getElementById("saveEntry")
  .addEventListener("click", () => captureUserInfo());

const printWishList = () => {
  const enterThing = document.getElementById("favoriteThing");
  const enterPlace = document.getElementById("favoritePlace");
  console.log(`I can purchase ${enterThing.value} at ${enterPlace.value}.`);
};

document
  .getElementById("saveWishList")
  .addEventListener("click", () => printWishList());
