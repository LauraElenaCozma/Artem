console.log("aici");
var language = {
    eng:{
        menu: ["HOME" , "ARTWORKS" , "ART MOVEMENTS" , "AUCTION"] , 
        artMove : ["RENAISSANCE" , "POST-IMPRESSIONISM" , "SURREALISM"] , 
        title2 : "Discover the Most Famous Paintings of All Time" , 
        description : ["Guernica, Pablo Picasso" , "The Birth of Venus, Sando Boticelli" , "Mona Lisa, Leonardo da Vinci" , "The Last Supper, Leonardo da Vinci" , "The Night Watch, Rembrandt" , "Whistler's Mother, ‎James McNeill Whistler" , "The Kiss, Gustav Klimt" , "American Gothic, Grant Wood" , "Las Meninas, Diego Velázquez" , "Bal du moulin de la Galette, Pierre-Auguste Renoir" ,"Le Déjeuner sur l'herbe, Édouard Manet" , "Café Terrace at Night, Vincent van Gogh" , "The Garden of Earthly Delights, Triptych by Hieronymus Bosch" ,"The Storm on the Sea of Galilee, Rembrandt" , "Christina's World, Andrew Wyeth"]
        },
    ro: {
        menu: ["ACASA" , "OPERE DE ARTA" , "MISCARI ARTISTICE" , "VANZARI"] ,
        artMove : ["RENASCENTISM" , "POSTIMPRESIONISM" , "SUPRAREALISM"] , 
        title2: "Descopera cele mai faimoase picturi ale tuturor timpurilor" , 
        description : ["Guernica, Pablo Picasso" , "Nasterea lui Venus, Sando Boticelli" , "Mona Lisa, Leonardo da Vinci" , "Cina cea de taina, Leonardo da Vinci" , "Rondul de noapte, Rembrandt" , "Mama lui Whistler, ‎James McNeill Whistler" , "Sarutul, Gustav Klimt" , "American Gothic, Grant Wood" , "Meninele, Diego Velázquez" , "Bal la moara de la Galette, Pierre-Auguste Renoir" ,"Dejunul pe iarba, Édouard Manet" , "Cafea noaptea la terasa, Vincent van Gogh" , "Grădina desfătărilor umane, Triptic de Hieronymus Bosch" ,"Furtuna de la marea Galileei, Rembrandt" , "Lumea Cristinei, Andrew Wyeth"]
        }
    };

function languageChange()
{
    let optSelect = document.getElementById("selectLang");
    console.log(event);
    let languageStored = localStorage.getItem("languageStored");

    let option = optSelect.value;

    console.log(option);
    languageStored = option;
    localStorage.setItem("languageStored" , languageStored);
    if(languageStored == "ENGLISH")
    {
        for(i = 0 ; i <= 3 ; i++)
            document.getElementsByClassName('tabs')[i].textContent = language.eng.menu[i];
        for(i = 0 ; i <= 2 ; i++)
            document.getElementsByClassName('artmove')[i].textContent = language.eng.artMove[i];
        document.getElementById("title2").innerHTML = language.eng.title2;
        for(i = 0 ; i <= 14; i++)
            document.getElementsByClassName('caption')[i].textContent = language.eng.description[i];
    }
    else
    {
     for(i = 0 ; i <= 3 ; i++)
        document.getElementsByClassName('tabs')[i].textContent = language.ro.menu[i];
    for(i = 0 ; i <= 2 ; i++)
        document.getElementsByClassName('artmove')[i].textContent = language.ro.artMove[i];
    document.getElementById("title2").innerHTML = language.ro.title2;

    for(i = 0 ; i <= 14; i++)
        document.getElementsByClassName('caption')[i].textContent = language.ro.description[i];
    }
         
}    


window.onload = function()
{

    console.log("aici");
    let optSelect = document.getElementById("selectLang");
    optSelect.addEventListener("change" , languageChange);
    let languageStored = localStorage.getItem("languageStored");
    if(languageStored === undefined)
    {
        languageStored = 'ENGLISH';
        localStorage.setItem("languageStored" , 'ENGLISH');
        optSelect.getElementsByTagName("option")[0].setAttribute("selected" , "selected");
    }
    else
     {
        if(languageStored === 'ENGLISH') optSelect.getElementsByTagName("option")[0].setAttribute("selected" , "selected");
        else optSelect.getElementsByTagName("option")[1].setAttribute("selected" , "selected");
        if(languageStored == 'ROMANA') this.languageChange();
     }
}


function searchPainting()
{
    var input, filter, gallery, image , i, txtValue , textDesc;
    input = document.getElementById('inputnav');
    filter = input.value.toUpperCase();
    gallery = document.getElementById("gallery");
    image = gallery.getElementsByTagName("figure");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < image.length; i++) {
        textDesc = image[i].getElementsByClassName("caption")[0];
        txtValue = textDesc.textContent || textDesc.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) { //it was found as substring
        image[i].style.display = ""; //it becomes visible 
        } else {
        image[i].style.display = "none";
        }
    }
}


function functieAbonare()
{
    //console.log(inputFilled());
    let name = document.getElementById("numeAbonare").value;
    let email = document.getElementById("emailAbonare").value;

   if(inputFilled())
   {
        fetch("http://localhost:3000", {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({name: name, email: email})
        }).then((data) => {
            return data.json()
        }).then((json)=>{
            if(json.Status === 'OK'){

                    timeoutConfirm();
            }
            console.log(json);
        })
   }
   else
   {
        timeoutWarning();
   }
    
}
function changeColor()
{
    let container = document.getElementById("containerBoxSubscribe");
    let theBody = document.getElementsByTagName("body")[0];
    theBody.removeChild(container);
}

function createConfirmBox()
{    
    var container = document.createElement("DIV");
    container.setAttribute("id" , "containerBoxSubscribe");
    container.addEventListener("click" , changeColor);
    var box = document.createElement("DIV");
    var theBody = document.getElementsByTagName("body")[0];
    theBody.appendChild(container);
    container.appendChild(box);
    box.setAttribute("id" , "confirmBox");
    box.setAttribute("class" ,"boxSubscribe"); 
    
    box.innerHTML = "Congratulations! <br>You subscribed";
}
function createWarningBox()
{
    var container = document.createElement("DIV");
    container.setAttribute("id" , "containerBoxSubscribe");
    var box = document.createElement("DIV");
    var theBody = document.getElementsByTagName("body")[0];
    theBody.appendChild(container);
    container.addEventListener("click" , changeColor);
    container.appendChild(box);
    box.setAttribute("id" , "warningBox");
    box.setAttribute("class" ,"boxSubscribe"); 
    box.innerHTML = "Fill all fields";
}


function timeoutConfirm()
{
    setTimeout(createConfirmBox , 1000);

    setTimeout(function() {
        let theBody = document.getElementsByTagName("body")[0];
        let confirm = document.getElementById("confirmBox");
        theBody.removeChild(confirm);
    } , 4000);

}

function timeoutWarning()
{
    setTimeout(createWarningBox , 1000);

}

function inputFilled()
{
    let inputName = document.getElementById("numeAbonare");
    let inputEmail = document.getElementById("emailAbonare");
    if(inputName.value.length == 0 || inputEmail.value.length == 0)
        return false;
    return true;
}