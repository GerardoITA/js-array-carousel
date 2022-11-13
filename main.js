const oggetti = document.getElementsByClassName("item");
const prossimo = document.getElementById("down");
const precedente = document.getElementById("up");

let show = 0;

prossimo.addEventListener(`click`, 

    function(){
        if(show < oggetti.length - 1) {

            oggetti[show].classList.remove("active");

            show++;

            oggetti[show].classList.add("active");

            /* if(show === oggetti.length - 1){

                prossimo.classList.add("hidden");
            } */
        }



    });

precedente.addEventListener(`click`, 
    function(){
        if(show > oggetti.length - 5){
            oggetti[show].classList.remove("active");

            show--;

            oggetti[show].classList.add("active");

            /* if(show === oggetti.length - 5){

                precedente.classList.add("hidden");
            } */
        }

    }


);

    