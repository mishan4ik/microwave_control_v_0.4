let btn_reheating = document.querySelector(".reheating_food");
let btn_defrosting = document.querySelector(".defrosting_food");
let btn_grill = document.querySelector(".grill_food");
let reheating = document.querySelector(".block_time_reheating");
let defrosting = document.querySelector(".block_time_defrosting");
let grill = document.querySelector(".block_grill_dish");
let start = document.querySelector(".btn_start_app");
let answer = document.querySelector(".answer_text_start");
let dish_soup = document.getElementById("soup_dish");
let buckwheat_dish = document.getElementById("buckwheat_dish");
let pasta_dish = document.getElementById("pasta_dish");
let btn_five = document.getElementById("five_min");
let btn_ten = document.getElementById("ten_min");
let btn_fiveteen = document.getElementById("fiveteen_min");
let btn_twenty = document.getElementById("twenty_min");


btn_reheating.onclick = function func(){

    if(reheating.style.display == ""){

        reheating.style.display = "block";
        reheating.style.margin = "0px auto";

    }
    else{

        reheating.style.display = ""

    }

}

btn_defrosting.onclick = function func(){

    if(defrosting.style.display == ""){

        defrosting.style.display = "block"
        defrosting.style.margin = "0px auto"
    }
    else{

        defrosting.style.display = ""

    }

}

btn_grill.onclick = function func(){

    if(grill.style.display == ""){

        grill.style.display = "block"

    }
    else{

        grill.style.display = ""

    }

}


let time_five = 5;
let time_ten = 10;
let time_fiveteen = 15;
let time_twenty = 20;

function start_five(){

    if(time_five > 0){

        answer.innerHTML = "Зачекайте " + time_five--; 

    }
    else{

        answer.innerHTML = "Виконано" 

    }

}

function start_ten(){

    if(time_ten > 0){

        answer.innerHTML = "Зачекайте " + time_ten--; 

    }
    else{

        answer.innerHTML = "Виконано" 

    }

}

function start_fiveteen(){

    if(time_fiveteen > 0){

        answer.innerHTML = "Зачекайте " + time_fiveteen--; 

    }
    else{

        answer.innerHTML = "Виконано" 

    }

}

function start_twenty(){

    if(time_twenty > 0){

        answer.innerHTML = "Зачекайте " + time_twenty--; 

    }
    else{

        answer.innerHTML = "Виконано" 

    }

}


btn_twenty.onclick = function(){

    setInterval(function(){

        start_twenty();
    
    },1000)

}



btn_fiveteen.onclick = function(){

    setInterval(function(){

        start_fiveteen();
    
    },1000)

}

btn_ten.onclick = function(){

    setInterval(function(){

        start_ten();
    
    },1000)

}


btn_five.onclick = function(){

    setInterval(function(){

        start_five();
    
    },1000)


}
