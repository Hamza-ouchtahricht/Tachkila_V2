const button_ajoute = document.querySelector("#button_ajout");

const modal_overly = document.querySelector("#modal-overlay");

const modal_ajoute_close= document.querySelector(".modal__close");

const button_cancel = document.querySelector(".btn--cancel");

const player_fullname = document.querySelector("#player_fullname");

const button_save = document.querySelector(".btn--save");

const error_nom = document.querySelector("#erreur_nom");

const player_number = document.querySelector("#player_number");

const erreur_numero = document.querySelector("#erreur_numero");





button_ajoute.addEventListener("click",() =>{

    
modal_overly.classList.toggle("active");


});

modal_ajoute_close.addEventListener("click", () =>{
    modal_overly.classList.toggle("active");
});

button_cancel.addEventListener("click" , () =>{
    modal_overly.classList.toggle("active");
})

 button_save.addEventListener("click", function() {
        const nom = player_fullname.value.trim();
        const numero = player_number.value.trim();
    
         if(nom === ""){
           error_nom.textContent = "Veuillez saisir le nom complet du joueur avant de soumettre." ;      
             error_nom.classList.toggle("active");
         }
         if( numero === ""){
            erreur_numero.textContent = "Veuillez saisir le Numéro du joueur avant de soumettre."
         }
          else{
            modal_overly.classList.toggle("active");
          }  


            
        
        
    

    });




    function hide_message () {
            error_nom.textContent = "" ;
         }
        

