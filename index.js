const select_btn = document.querySelector(".select-btn"),
  items = document.querySelectorAll(".item");

select_btn.addEventListener("click", () => {
  select_btn.classList.toggle("open");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");
    // select all checked and the counter element
    let checked = document.querySelectorAll(".checked"),
      text = document.querySelector(".text");
    //   
    if (checked && checked.length > 0) {
      console.log("oksy");
      text.innerText = `${checked.length} Selected`;
    } else {
      text.innerText = "Select Skills";
      console.log("what");
    }
  });
});
