document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("bc");
  const adm = document.getElementById("adm");

  window.verificarLogin = function () {
    if (
      document.getElementById("input-u").value === "Marcus Hewit" &&
      document.getElementById("input-s").value === "27092005"
    ) {
      document.getElementById("adm").style.visibility = "visible";
      localStorage.setItem("logged", "1");
    }
  };
  if (localStorage.getItem("logged") === "1") {
    document.getElementById("adm").style.visibility = "visible";
  } else {
    document.getElementById("adm").style.visibility = "hidden";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".doc-title");
  const descriptions = document.querySelectorAll(".doc-des");

  titles.forEach((title) => {
    title.addEventListener("click", (e) => {
      e.preventDefault();

      const target = title.dataset.target;

      descriptions.forEach((desc) => {
        desc.classList.remove("active");
      });

      document.getElementById(`doc-${target}`)?.classList.add("active");
    });
  });
});
