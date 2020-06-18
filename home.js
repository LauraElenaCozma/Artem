// localStorage.setItem("languageStored" , "ENGLISH");
        console.log("aici");
        var language = {
            eng:{
                welcome: "A place where you find your inspiration" ,
                menu: ["HOME" , "ARTWORKS" , "ART MOVEMENTS" , "AUCTION"] , 
                artMove : ["RENAISSANCE" , "POST-IMPRESSIONISM" , "SURREALISM"]
                },
            ro: {
                welcome: "Locul in care iti gasesti inspiratia" ,
                menu: ["ACASA" , "OPERE DE ARTA" , "MISCARI ARTISTICE" , "VANZARI"] ,
                artMove : ["RENASCENTISM" , "POSTIMPRESIONISM" , "SUPRAREALISM"]
                }
            };

        function languageChange()
        {
            let optSelect = document.getElementById("selectLang");
            console.log(event);
            let languageStored = localStorage.getItem("languageStored");
            
            let option = optSelect.value;
            // if(languageStored != option)
            // {
                
                console.log(option);
                languageStored = option;
                localStorage.setItem("languageStored" , languageStored);
                if(languageStored == "ENGLISH")
                {
                    document.getElementById('div2').textContent = language.eng.welcome;
                    for(i = 0 ; i <= 3 ; i++)
                        document.getElementsByClassName('tabs')[i].textContent = language.eng.menu[i];
                    for(i = 0 ; i <= 2 ; i++)
                        document.getElementsByClassName('artmove')[i].textContent = language.eng.artMove[i];
                }
                else
                {
                    document.getElementById('div2').textContent = language.ro.welcome;
                 for(i = 0 ; i <= 3 ; i++)
                    document.getElementsByClassName('tabs')[i].textContent = language.ro.menu[i];
                for(i = 0 ; i <= 2 ; i++)
                    document.getElementsByClassName('artmove')[i].textContent = language.ro.artMove[i];
                }
                 
            // }
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
                if(languageStored == 'ENGLISH') optSelect.getElementsByTagName("option")[0].setAttribute("selected" , "selected");
                else optSelect.getElementsByTagName("option")[1].setAttribute("selected" , "selected");
                if(languageStored == 'ROMANA') this.languageChange();
            }
        }
 
        