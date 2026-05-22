fetch('restaurant-bresilien.json')
    .then(response =>
        response.json()
    )
    .then(data => {
        console.log(data)
        afficherPlats(data.plats)
        afiicherServices(data.services)
        afiicherTemoignages(data.temoignages)
        afiicherhero(data)
        afiicherPremesse(data)
          

  
    }
    );

        // permet de faire fonctionner le carrousel pour les prommesclients
        var swiper = new Swiper(".mySwiper", {
            slidesPerView:"auto"
        });


// role : recupere les plats un par un et de les afficher dans le dom 
// parametre :du tableau de plat 
// return : rien car elle affiche
function afficherPlats(tableauPlats) {

    tableauPlats.forEach(plats => {

        let platsListe = `       
        <a href="feijoada.html" target="_blank" class="txt-none">
        <div class="bento-card pos-rel direc-col just-end pad-30 bg-boxe">
            <img src="${plats.image}" alt="" class="img-grid w100">
            <div class="card-overlay"></div> <!-- Filtre sombre -->
            <div class="pos-rel">
                 <!-- Texte au premier plan -->
                <h3 class="majuscule clr-white mgb15">${plats.nom}</h3>
                <p class="clr-white">${plats.desc}</p>
            </div>
        </div>
        </a>`

        document.querySelector("#card-plats").innerHTML += platsListe
    })    
    ;
}

// role : recupere les service du tableau un par un et de les afficher dans le dom 
// parametre :du tableau de services
// return : rien car elle affiche
function afiicherServices (tableauServices){

        tableauServices.forEach(service => {
        let servicesListe =`        
        <a href="https://brazil-selection.com/lactu-bresil/2020/09/16/sites-culturels-bresil-unesco/" target="_blank" class="txt-none">
        <div class="bento-card pos-rel direc-col just-end pad-30">
            <img src="asset/959792-le-grand-bazar-du-bresil-l-evenement-gratuit-qui-celebre-la-culture-bresilienne-a-aubervilliers.jpg" alt="" class="img-grid w100">
            <div class="card-overlay"></div> <!-- Filtre sombre -->
            <div class="pos-rel">
                <h3 class="majuscule clr-white mgb15">${service.nom}</h3>
                <p class="clr-white">${service.desc}</p>
            </div>
        </div>
        </a>`

         document.querySelector("#card-services").innerHTML += servicesListe 

        });
}

// role : recuperer les temoignages un par un et les afficher dans le dom
// parametre : du tableau de temoignages
// return : rien car elle affiche
function afiicherTemoignages (tableauTemoignage){

        tableauTemoignage.forEach(temoignages => {
        let temoignagesListe =`        
            <div class="w30 flex gap16 card-tem">

                <div class="flex align-center w50">

                    <div class="w60 ml15">
                        <h3 class="txt-size">${temoignages.prenom}</h3>
                        <p>${temoignages.typeExperience}</p>
                        <p>${star(temoignages.note)}</p>
                    </div>
                </div>
                <p class="mgt15">${temoignages.commentaire}</p>
            </div>`

         document.querySelector("#cards-temoignages").innerHTML += temoignagesListe 

        });
}
// role : recuperer l'objet global pour afficher la section hero dans le dom
// parametre : de l'objet contenant les donnees pour le hero texteAccroche et texteBouton
// return : rien car elle affiche
function afiicherhero (tableauHero){

        let heroListe =`     
        <div class=" flex align-center gap20 w50">
            <h1 class="w-48">${tableauHero.nomCommercial}</h1>
            <p class="hero-p">${tableauHero.texteAccroche}</p>
            <button class="pad-16 br-20 bg-green bold clr-white">${tableauHero.texteBouton}</button>
        </div>
        <div class="card-follow">

            <div class="flex direc-col">
                <a href="https://www.instagram.com/snackbrasil20/" target="_blanck" class="txt-none">
                <i class="ph-fill ph-instagram-logo icon-size clr-dark"></i>
                </a>

                <a href="https://www.facebook.com/ChefAmazonas/" target="_blanck" class="txt-none">
                <i class="ph-fill ph-messenger-logo icon-size clr-dark"></i>
                </a>

                <a href="https://www.tiktok.com/discover/gastronomie-br%C3%A9silienne" target="_blanck" class="txt-none ">
                <i class="ph-fill ph-tiktok-logo icon-size clr-dark"></i>
                </a>
            </div>
        </div>`

         document.querySelector("#hero").innerHTML += heroListe 

       ;
}

// role : recuperer l'objet promesses pour injecter les phrases dans le dom
// parametre : le tableau de promesses
// return : rien car elle affiche
function afiicherPremesse (tableauPromesse){

        let promesseListe =`
        
                        <div class="swiper-slide">
                            <div class="card-promesse w60 flex align-center gap30">
                                <i class="ph-fill ph-bowl-food icon-taille"></i>
                                <h3 class="txt-center ">${tableauPromesse.promessesClient[0]}</h3>
                            </div>
                        </div>


                        <div class="swiper-slide">
                            <div class="card-promesse w60 flex align-center gap30">
                                <i class="ph-fill ph-sunglasses icon-taille"></i>
                                <h3 class="txt-center ">${tableauPromesse.promessesClient[1]}</h3>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="card-promesse w60 flex align-center gap30">
                                <i class="ph-fill ph-cooking-pot icon-taille"></i>
                                <h3 class="txt-center">${tableauPromesse.promessesClient[2]}</h3>
                            </div> 
                        </div>`

         document.querySelector("#promesseClients").innerHTML += promesseListe 

       ;
}

// role : generer une chaine de caracteres d'etoiles pleines et vides selon la note fournie
// parametre : la note 
// return : note final pour chaqquee temoignage
function star(note){
    return "★".repeat(note) + "☆".repeat(5-note)
}















































