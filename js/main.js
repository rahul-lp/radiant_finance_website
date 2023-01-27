// horizontal accordian
const choiceArray = document.querySelectorAll(".choice")

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        // choiceArray.forEach((element) => {
        //     element.classList.remove("expand", "unset")
        //     element.classList.add('hoz_small')
        // })
        // card.classList.remove("hoz_small")
        // card.classList.add('expand')
    });
});
