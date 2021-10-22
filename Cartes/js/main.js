
class Carte {
    constructor(verso, numero, recto) {
      this.verso = verso;
      this.numero = numero;
      this.recto = recto;
    }

  }
  

var deplacer= document.getElementById("deplacer")
deplacer.addEventListener('click',sortirDistribuer)
var boutons = document.querySelectorAll("img");
var exp= document.getElementById("exp")
exp.addEventListener('click', experience)
var form= document.getElementById("form")
form.addEventListener('click', formation)
var moi= document.getElementById("moi")
moi.addEventListener('click', propos)
var contact= document.getElementById("contact")
contact.addEventListener('click', silvercard)

/********************************************************Ajout de la class clickable */
function ajoutClick(){
    let carte =document.getElementsByClassName("carte")
    for (let i = 0;i<carte.length;i++){
        carte[i].classList.add('clickable')
    }
    let w = window.innerWidth;
    if (w>1200){
        afficherwindow()
    } else {
        afficheresponsive()
    }
}
function afficheresponsive(){
    let carte =document.getElementsByClassName("carte")
    boutons = document.querySelectorAll("img");
    for (let i=0;i<carte.length;i++){
        boutons[i].addEventListener('click',function(){
            boutons[i].src=`img/test${i}.png`
        })
        boutons[i].addEventListener('click',function(){
            var pleinecran = document.createElement('img');
            pleinecran.src=boutons[i].src
            pleinecran.style.width= "100vw"
            pleinecran.style.zIndex = 99
            pleinecran.style.margin = "5vh auto auto auto";
            pleinecran.style.borderRadius = "5%";
            console.log(pleinecran)
            var div = document.getElementById("x");
            div.appendChild(pleinecran)
            pleinecran.addEventListener('click',function(){
                pleinecran.remove()
            })
        }) 
    }
}
function afficherwindow(){
    let carte =document.getElementsByClassName("carte")
    boutons = document.querySelectorAll("img");
    for (let i=0;i<carte.length;i++){
        boutons[i].addEventListener('click',function(){
            boutons[i].src=`img/test${i}.png`
        })
        boutons[i].addEventListener('click',function(){
            var pleinecran = document.createElement('img');
            pleinecran.src=boutons[i].src
            pleinecran.style.height= "100vh"
            pleinecran.style.zIndex = 99
            pleinecran.style.margin = "auto";
            pleinecran.style.borderRadius = "5%";
            console.log(pleinecran)
            var div = document.getElementById("x");
            div.appendChild(pleinecran)
            pleinecran.addEventListener('click',function(){
                this.remove()
            })
        }) 
    }
}
/*******************************************************Création de 20 cartes */
function creation(){
    let j =document.getElementsByClassName("carte")
    if (j.length===0){
    for (let i = 0; i < 20; i++){
    var dosCarte = document.createElement('img');
    dosCarte.classList.add("pile", "carte")
    var carteTest= new Carte("img/Cartedebase.png",i,"")
    dosCarte.src= carteTest.verso;
    var div = document.getElementById("x");
    div.appendChild(dosCarte);}
    }
    else{ alert('impossible')}
}

/*******************************************************Destruction des 20 cartes */
function initialisation(){
    let j =document.getElementsByClassName("carte")
    for (let i=(j.length-1); i>=0;i--){
        j[i].remove()
        console.log(j)
    }
}

/*******************************************************Distribution des 20 cartes */
function distribution(){
    ajoutClick()
    console.log(boutons)
    let w = window.innerWidth;
    if (w>1200){
        distributioWindow()
    } else {
        distributionResponsive()
    }
}

/**Pour phone et tablette */
function distributionResponsive(){
    let carte =document.getElementsByClassName("carte")
    carte[0].classList.add("transformation")
    carte[0].style.transform="translate3d(-40vw,-2vh,0)"
    carte[1].classList.add("transformation")
    carte[1].style.transform="translate3d(-40vw, 14vh,0)"
    carte[2].classList.add("transformation")
    carte[2].style.transform="translate3d(-40vw, 30vh,0)"
    carte[3].classList.add("transformation")
    carte[3].style.transform="translate3d(-40vw, 46vh,0)"
    carte[4].classList.add("transformation")
    carte[4].style.transform="translate3d(-20vw,-2vh,0)"
    carte[5].classList.add("transformation")
    carte[5].style.transform="translate3d(-20vw,14vh,0)"
    carte[6].classList.add("transformation")
    carte[6].style.transform="translate3d(-20vw, 30vh,0)"
    carte[7].classList.add("transformation")
    carte[7].style.transform="translate3d(-20vw, 46vh,0)"
    carte[8].classList.add("transformation")
    carte[8].style.transform="translate3d(0,-2vh,0)"
    carte[9].classList.add("transformation")
    carte[9].style.transform="translate3d(0,14vh,0)"
    carte[10].classList.add("transformation")
    carte[10].style.transform="translate3d(0, 30vh,0)"
    carte[11].classList.add("transformation")
    carte[11].style.transform="translate3d(0, 46vh,0)"
    carte[12].classList.add("transformation")
    carte[12].style.transform="translate3d(20vw,-2vh,0)"
    carte[13].classList.add("transformation")
    carte[13].style.transform="translate3d(20vw,14vh,0)"
    carte[14].classList.add("transformation")
    carte[14].style.transform="translate3d(20vw, 30vh,0)"
    carte[15].classList.add("transformation")
    carte[15].style.transform="translate3d(20vw, 46vh,0)"
    carte[16].classList.add("transformation")
    carte[16].style.transform="translate3d(40vw,-2vh,0)"
    carte[17].classList.add("transformation")
    carte[17].style.transform="translate3d(40vw,14vh,0)"
    carte[18].classList.add("transformation")
    carte[18].style.transform="translate3d(40vw, 30vh,0)"
    carte[19].classList.add("transformation")
    carte[19].style.transform="translate3d(40vw, 46vh,0)"
} 

function distributioWindow(){/** window */
    let carte =document.getElementsByClassName("carte")
    carte[0].classList.add("transformation")
    carte[0].style.transform="translate3d(-40vw,-2vh,0)"
    carte[1].classList.add("transformation")
    carte[1].style.transform="translate3d(-40vw, 20vh,0)"
    carte[2].classList.add("transformation")
    carte[2].style.transform="translate3d(-40vw, 42vh,0)"
    carte[3].classList.add("transformation")
    carte[3].style.transform="translate3d(-27vw, -2vh,0)"
    carte[4].classList.add("transformation")
    carte[4].style.transform="translate3d(-27vw,20vh,0)"
    carte[5].classList.add("transformation")
    carte[5].style.transform="translate3d(-27vw,42vh,0)"
    carte[6].classList.add("transformation")
    carte[6].style.transform="translate3d(-14vw, -2vh,0)"
    carte[7].classList.add("transformation")
    carte[7].style.transform="translate3d(-14vw, 20vh,0)"
    carte[8].classList.add("transformation")
    carte[8].style.transform="translate3d(-14vw,42vh,0)"
    carte[9].classList.add("transformation")
    carte[9].style.transform="translate3d(0,-2vh,0)"
    carte[10].classList.add("transformation")
    carte[10].style.transform="translate3d(0, 20vh,0)"
    carte[11].classList.add("transformation")
    carte[11].style.transform="translate3d(0, 42vh,0)"
    carte[12].classList.add("transformation")
    carte[12].style.transform="translate3d(13vw,-2vh,0)"
    carte[13].classList.add("transformation")
    carte[13].style.transform="translate3d(13vw,20vh,0)"
    carte[14].classList.add("transformation")
    carte[14].style.transform="translate3d(13vw, 42vh,0)"
    carte[15].classList.add("transformation")
    carte[15].style.transform="translate3d(26vw, -2vh,0)"
    carte[16].classList.add("transformation")
    carte[16].style.transform="translate3d(26vw,20vh,0)"
    carte[17].classList.add("transformation")
    carte[17].style.transform="translate3d(26vw,42vh,0)"
    carte[18].classList.add("transformation")
    carte[18].style.transform="translate3d(40vw, -2vh,0)"
    carte[19].classList.add("transformation")
    carte[19].style.transform="translate3d(40vw, 20vh,0)"
}

/******************************************************Flip carte  */
function experience(){
    sortirDistribuer()
    window.setTimeout(()=>{
    boutons[13].src=`img/test13.png`
    boutons[15].src=`img/test15.png`
    boutons[18].src=`img/test18.png`
    },501)
}
function formation(){

    sortirDistribuer()
    window.setTimeout(()=>{
    boutons[1].src=`img/test1.png`
    boutons[9].src=`img/test9.png`
    boutons[10].src=`img/test10.png`
    },501)
}
function propos(){
    sortirDistribuer()
    window.setTimeout(()=>{
        boutons[4].src=`img/test4.png`
        boutons[0].src=`img/test0.png`
        boutons[5].src=`img/test5.png`
        boutons[6].src=`img/test6.png`
        boutons[8].src=`img/test8.png`
        boutons[11].src=`img/test11.png`
        boutons[12].src=`img/test12.png`
        boutons[14].src=`img/test14.png`
    },501)

}
function silvercard(){
    var pleinecran = document.createElement('img');
    pleinecran.src="img/contact.png"
    let w = window.innerWidth;
    if (w>1200){
    pleinecran.style.height= "100vh"
    pleinecran.style.zIndex = 99
    pleinecran.style.margin = "auto";
    pleinecran.style.borderRadius = "5%";
    console.log(pleinecran)
    var div = document.getElementById("x");
    div.appendChild(pleinecran)
    pleinecran.addEventListener('click',function(){
        this.remove()
    })
    } else {
        pleinecran.style.width= "100vw"
            pleinecran.style.zIndex = 99
            pleinecran.style.margin = "5vh auto auto auto";
            pleinecran.style.borderRadius = "5%";
            console.log(pleinecran)
            var div = document.getElementById("x");
            div.appendChild(pleinecran)
            pleinecran.addEventListener('click',function(){
                pleinecran.remove()
            })

    }
}
function sortirDistribuer(){
    initialisation()
    window.setTimeout(creation,0)
    
    window.setTimeout(distribution,500)
}