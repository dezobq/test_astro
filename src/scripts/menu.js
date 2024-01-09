document.getElementById("navMenuToggler")?.addEventListener("click", function () {
  const navMenu = document.getElementById("navMenu")
  navMenu?.classList.toggle("h-0")
  navMenu?.classList.toggle("h-full")
  navMenu?.classList.toggle("opacity-0")
  navMenu?.classList.toggle("opacity-100")
})