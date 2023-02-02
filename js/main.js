
// consts
const testimonial_1 = "Radiant Finance has provided excellent service for both our business and personal insurance needs. Not only do I get great service with your company but I also get a great policy at a great price. I express my complete satisfaction for their prompt and perfect service and for suggesting the best policies. We also appreciate that you used your experience and expertise to help save money on those policies.";
const testimonial_2 = "\"Highly Recommend!\" My experience of car financing and purchasing a car through Radiant Finance & Insurance was amazing  - they, at Radiant Finance & Insurance are extremely knowledgeable about the available models and variety of cars available. I can confidently say I’ll be returning to Brijesh for future car purchases and highly recommend him to anyone in the market for a new vehicle financing.";
const testimonial_3 = "Passion, knowledge and a genuine interest in achieving the best for clients is what makes a truly professional Advisor. Radiant Finance & Insurance had this and more. Brijesh's ji dedication to his clients, business excellence and knowledge sets him apart and I would highly recommend him to anyone who needs car loan and any type of insurance. ";
const testimonial_4 = "We’ve been with Radiant Finance for past many years.They are professional, friendly and care about their customers.They actively look for the best rates and coverage annually. Their continual advice on financial planning issues has saved us significant amounts of money.They have a very engaged team that demonstrates great ownership of the work they do.  I highly recommend them.";


// Testimonials variables
var current_Card = 4;
var cardClicked = false;

$(document).ready(function () {

    // selecting a testimonial card
    const testimonialCardArray = document.querySelectorAll(".testimonial_card")
    testimonialCardArray.forEach((card) => {
        card.addEventListener("click", () => {
            cardClicked = true;
            testimonialCardArray.forEach((element) => {
                element.classList.remove("testimonial_selected_cards")
                element.classList.remove("ms-5")
                element.classList.add('mx-5')
                element.classList.add('testimonial_unselected_card')
            })
            card.classList.remove("mx-5")
            card.classList.remove("testimonial_unselected_card")
            card.classList.add('ms-5')
            card.classList.add('testimonial_selected_cards')

            switch (card.id) {
                case "testimonial_1": $("#testimonial_text").text(testimonial_1);
                    current_Card = 1;
                    break;
                case "testimonial_2": $("#testimonial_text").text(testimonial_2);
                    current_Card = 2;
                    break;
                case "testimonial_3": $("#testimonial_text").text(testimonial_3);
                    current_Card = 3;
                    break;
                case "testimonial_4": $("#testimonial_text").text(testimonial_4);
                    current_Card = 4;
                    break;
            }

        });
    });

    // auto switching cards
    showSlides();
});


function showSlides(){
    if(cardClicked){return;}
    // console.log("Show Testimonials for " + current_Card);
    switch(current_Card){
        case 1 : changeSelected(2);
        current_Card = 2; break;
        case 2 : changeSelected(3);
        current_Card = 3; break;
        case 3 : changeSelected(4);
        current_Card = 4; break;
        case 4 : changeSelected(1);
        current_Card = 1; break;
    }
    // console.log(cardClicked);
    setTimeout(showSlides, 3000);
}


function changeSelected(new_selected) {
    const testimonialCardArray = document.querySelectorAll(".testimonial_card")

    testimonialCardArray.forEach((card) => {
        card.classList.remove("testimonial_selected_cards")
        card.classList.remove("ms-5")
        card.classList.add('mx-5')
        card.classList.add('testimonial_unselected_card')
    });

    var card;
    switch (new_selected) {
        case 1: $("#testimonial_text").text(testimonial_1);
            card = document.getElementById("testimonial_1");
            break;
        case 2: $("#testimonial_text").text(testimonial_2);
            card = document.getElementById("testimonial_2");
            break;
        case 3: $("#testimonial_text").text(testimonial_3);
            card = document.getElementById("testimonial_3");
            break;
        case 4: $("#testimonial_text").text(testimonial_4);
            card = document.getElementById("testimonial_4");
            break;
    }

    // console.log("new selected is " + new_selected);
    // console.log("Card is " + card);


    card.classList.remove("mx-5")
    card.classList.remove("testimonial_unselected_card")
    card.classList.add('ms-5')
    card.classList.add('testimonial_selected_cards')
}
