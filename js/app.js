let btn = document.getElementById("menu_btn");
let menu = document.getElementById("menu");
$(btn).on("click", () => {
   $(menu).toggleClass("not_show");
});
