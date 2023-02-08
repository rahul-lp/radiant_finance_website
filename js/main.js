// consts
const testimonial_1 = "Radiant Finance has provided excellent service for both our business and personal insurance needs. Not only do I get great service with your company but I also get a great policy at a great price. I express my complete satisfaction for their prompt and perfect service and for suggesting the best policies. We also appreciate that you used your experience and expertise to help save money on those policies.";
const testimonial_2 = "\"Highly Recommend!\" My experience of car financing and purchasing a car through Radiant Finance & Insurance was amazing  - they, at Radiant Finance & Insurance are extremely knowledgeable about the available models and variety of cars available. I can confidently say I’ll be returning to Brijesh for future car purchases and highly recommend him to anyone in the market for a new vehicle financing.";
const testimonial_3 = "Passion, knowledge and a genuine interest in achieving the best for clients is what makes a truly professional Advisor. Radiant Finance & Insurance had this and more. Brijesh's ji dedication to his clients, business excellence and knowledge sets him apart and I would highly recommend him to anyone who needs car loan and any type of insurance. ";
const testimonial_4 = "We’ve been with Radiant Finance for past many years.They are professional, friendly and care about their customers.They actively look for the best rates and coverage annually. Their continual advice on financial planning issues has saved us significant amounts of money.They have a very engaged team that demonstrates great ownership of the work they do.  I highly recommend them.";

// Testimonials variables
var current_Card = 4;
var cardClicked = false;

// execute the code when document is fully loaded
$(document).ready(function () {
    // auto switching testimonial cards
    autoSwitchTestimonials();

    // selecting a testimonial card
    selectTestimonialCard();

    // Add smooth scrolling to all links of navigation
    addSmoothScrolling();

    // $('footer_form').on('submit', submit_form)
});

// auto switching testimonial cards
function autoSwitchTestimonials() {
    // if card is already clicked, exit the loop
    if (cardClicked) { 
        return; 
    }

    // change selected card
    switch (current_Card) {
        case 1: changeSelected(2);
            current_Card = 2; break;
        case 2: changeSelected(3);
            current_Card = 3; break;
        case 3: changeSelected(4);
            current_Card = 4; break;
        case 4: changeSelected(1);
            current_Card = 1; break;
    }

    // Create a recursive call to execute auto-switching with a time delay
    setTimeout(autoSwitchTestimonials, 3000);
}

// change style classes of selected card
function changeSelected(new_selected) {
    // get all testimonial cards
    const testimonialCardArray = document.querySelectorAll(".testimonial_card")

    // make all cards unselected
    testimonialCardArray.forEach((card) => {
        card.classList.remove("testimonial_selected_cards")
        card.classList.remove("ms-5")
        card.classList.add('mx-5')
        card.classList.add('testimonial_unselected_card')
    });

    // find next card to be selected
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

    // make next card selected
    card.classList.remove("mx-5")
    card.classList.remove("testimonial_unselected_card")
    card.classList.add('ms-5')
    card.classList.add('testimonial_selected_cards')

    let clone = card.cloneNode(true);
    clone.innerHTML =clone.innerHTML.replace(/h5/g, "p");
    
    // Append the newly created element on element p 
    horizontal_card_element = document.getElementById('empty_testimonial');
    horizontal_card_element.innerHTML = "";
    horizontal_card_element.appendChild( clone );
    horizontal_card_element.innerHTML =horizontal_card_element.innerHTML.replace(/ms-5 /g, "");

}

// selecting a testimonial card
function selectTestimonialCard(){
    // find all cards
    const testimonialCardArray = document.querySelectorAll(".testimonial_card")

    testimonialCardArray.forEach((card) => {
        // add on click event listner
        card.addEventListener("click", () => {
            // to stop auto switching of cards when clicked
            cardClicked = true;
            
            // make all cards unselected
            testimonialCardArray.forEach((element) => {
                element.classList.remove("testimonial_selected_cards")
                element.classList.remove("ms-5")
                element.classList.add('mx-5')
                element.classList.add('testimonial_unselected_card')
            })

            // make current card selected 
            card.classList.remove("mx-5")
            card.classList.remove("testimonial_unselected_card")
            card.classList.add('ms-5')
            card.classList.add('testimonial_selected_cards')

            // change testimonial text for selected card
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
}

function addSmoothScrolling() {
    $("a").on('click', function (event) {

        // offset based on screen size
        var offset = (($(window).width() < 992) ? 250 : 50);

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - offset
        }, 800);
    });
}


function send_extra_query(){
    query = document.getElementById('faq_query_input').value;
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=rahulrjdpr@gmail.com&su=Query&body=" + query)

    $('#faq_modal').modal('hide');

    showToast();

}

function showToast(){
    toast = new bootstrap.Toast(document.getElementById("query_sent_toast"));
    toast.show();
}