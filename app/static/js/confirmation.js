function pop_up() {
    const pop_up = document.getElementById("pop-up")
    const main = document.getElementById("main")
    pop_up.classList.toggle("active")
    main.classList.toggle("blur")
}