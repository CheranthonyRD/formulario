
//variables y elementos
const list_barber = document.querySelector(".list_barber");
const img = document.querySelector(".form__img");
const cuts = document.querySelector(".selection-type");
const price = document.querySelector(".price");
const success = document.querySelector(".success");
const cancel = document.querySelector(".cancel");

let barberia = [];

//events
document.addEventListener("DOMContentLoaded", ()=>{
loadBarbers();
price.value = "0.00";
});

success.addEventListener("click", (e)=>{
    e.preventDefault();
});

cancel.addEventListener("click", (e)=>{
    e.preventDefault();
});

cuts.addEventListener("change", changeCuts);

list_barber.addEventListener("change", (e)=>{
    if(e.target.value === ""){
        cleanCuts();
        price.value = "0.00";
        img.src = "assets/7997975_900.jpg";
        return;
    }
    barberia = barbers.filter(b=>{
       return b.nombre === e.target.value; 
    });

    img.src = barberia[0].img;
    loadCutsAndPrice(barberia);
});


//functions
function loadBarbers(){
   barbers.forEach(barber => {
        const option = document.createElement("OPTION");
        option.value = barber.nombre.trim();
        option.textContent = barber.nombre.trim();
        list_barber.appendChild(option);
    });
}

function loadCutsAndPrice(barberia){
    cleanCuts();
    price.value = "0.00";
    barberia.forEach(b=>{
        const option = document.createElement("OPTION");
        option.textContent = "";
        cuts.append(option);
        b.cortes.forEach( c => {
            const option = document.createElement("OPTION");
            option.value = c.tipo;
            option.textContent = c.tipo;
            cuts.appendChild(option);
        });
    });
}

function changeCuts(e){
    let p = [];

    if(e.target.value === ""){
        price.value = "0.00";
    }    

    if(barberia.length > 0){
       barberia.forEach( b=>{
           p = b.cortes.filter( f => f.tipo === e.target.value);
        });
    }

    if(p.length > 0){
        price.value = p[0].precio + " RD$";
    }
}

function cleanCuts(){
    while(cuts.firstChild){
        cuts.removeChild(cuts.firstChild);
    }
}



