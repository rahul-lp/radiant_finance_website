$(document).ready(function () {

    // switch_tab();
    
    add_onClickActions();
});

// function switch_tab(){

//     btn_new_car = document.getElementById('btn_new_car');
//     btn_new_car.addEventListener("click", () => {
//         btn_new_car.classList.add('selected_tab')
//     });

//     const allTabs = document.querySelectorAll(".page_tab")

//     allTabs.forEach((tab) => {
//         // add on click event listner
//         tab.addEventListener("click", () => {
//             // make all cards unselected
//             allTabs.forEach((element) => {
//                 element.classList.remove("selected_tab")
//                 element.classList.add('normal_tab')
//             })

//             // make current card selected 
//             // var currentTabs = document.querySelectorAll()
//             tab.classList.remove("normal_tab")
//             tab.classList.add('selected_tab')

//             switch(tab.id){

//             }
//         });
//     });
// }

function add_onClickActions(){
    document.getElementById("index_home").onclick = function () {
        location.href = "../index.html#hero";
    };
    document.getElementById("index_services").onclick = function () {
        location.href = "../index.html#services";
    };
    document.getElementById("index_about").onclick = function () {
        location.href = "../index.html#about";
    };
    document.getElementById("index_why_us").onclick = function () {
        location.href = "../index.html#why_us";
    };
    document.getElementById("index_testimonials").onclick = function () {
        location.href = "../index.html#testimonial";
    };
    document.getElementById("index_contact").onclick = function () {
        location.href = "../index.html#contact_us";
    };
    
    if(document.getElementById("btn_new_car")!=null){
        document.getElementById("btn_new_car").onclick = function () {
            location.href = "finance_new_car.html";
        };
        document.getElementById("btn_old_car").onclick = function () {
            location.href = "finance_old_car.html";
        };
        document.getElementById("btn_home_loan").onclick = function () {
            location.href = "finance_home_loan.html";
        };
        document.getElementById("btn_new_car_2").onclick = function () {
            location.href = "finance_new_car.html";
        };
        document.getElementById("btn_old_car_2").onclick = function () {
            location.href = "finance_old_car.html";
        };
        document.getElementById("btn_home_loan_2").onclick = function () {
            location.href = "finance_home_loan.html";
        };
    }

    if(document.getElementById("btn_ins_health")!=null){
        document.getElementById("btn_ins_health").onclick = function () {
            location.href = "insurance_health.html";
        };
        document.getElementById("btn_ins_life").onclick = function () {
            location.href = "insurance_life.html";
        };
        document.getElementById("btn_ins_vehicle").onclick = function () {
            location.href = "insurance_vehicle.html";
        };
        document.getElementById("btn_ins_commercial").onclick = function () {
            location.href = "insurance_commercial.html";
        };
        document.getElementById("btn_ins_health_2").onclick = function () {
            location.href = "insurance_health.html";
        };
        document.getElementById("btn_ins_life_2").onclick = function () {
            location.href = "insurance_life.html";
        };
        document.getElementById("btn_ins_vehicle_2").onclick = function () {
            location.href = "insurance_vehicle.html";
        };
        document.getElementById("btn_ins_commercial_2").onclick = function () {
            location.href = "insurance_commercial.html";
        };
    }


}
