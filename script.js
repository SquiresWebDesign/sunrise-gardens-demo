const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

}


document.querySelectorAll("#navigation a").forEach(link => {

  link.addEventListener("click", () => {

    navigation.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}
