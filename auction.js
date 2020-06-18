window.onload = function(){


function addPainting()
{
    fetch("http://localhost:3000/auction")
    .then((data) => { return data.json() })
    .then((data) =>
    {
        for(let i = 0 ; i < data.length ; i++)
        {
            createElement(data[i]["title"] , data[i]["description"] , data[i]["artist"] , data[i]["dimensions"] , data[i]["price"]);
        }
        let div = document.getElementById("sendData");
    })
}

addPainting();

function createElement(tit , desc , auth , dim , pr)
{

    let myDiv = document.createElement("DIV");
    myDiv.setAttribute("class" , "container_sold");

    let image = document.createElement("img");
    image.setAttribute("class" , "painting");
    myDiv.appendChild(image);

    let content = document.createElement("DIV");
    content.setAttribute("class" , "description");

    let title = document.createElement("DIV");
    title.setAttribute("class" , "dtitle");
    title.innerHTML = tit;
    content.appendChild(title);

    let description = document.createElement("div");
    description.setAttribute("class" , "descr");
    description.innerHTML = desc;
    content.appendChild(description);

    let info = document.createElement("div");
    info.setAttribute("class" , "dcontent");
    info.innerHTML = "Artist: " + auth + "<br>" + "Dimensions: " + dim + "<br>" + "Price: " + pr;
    content.appendChild(info);

    myDiv.appendChild(content);

    let container = document.getElementById("container");
    //container.insertBefore(myDiv , container.firstChild);
    container.appendChild(myDiv);

}

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function submitData()
  {
      let title = document.getElementsByName("ftitle")[0].value;
      let description = document.getElementsByName("fdesc")[0].value;
      let artist = document.getElementsByName("fartist")[0].value;
      let dimensions = document.getElementsByName("fdimensions")[0].value;
      let price = document.getElementsByName("fprice")[0].value;

      if(title.lenght != 0 && description.length != 0 && artist.length != 0 && dimensions.length != 0 && price.length != 0)
      {
        fetch("http://localhost:3000/auction", {
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
            body: JSON.stringify({title: title, description: description , artist : artist , dimensions : dimensions , price: price})
        }).then((data) => {
            return data.json()
        }).then((json)=>{
            if(json.Status === "OK"){
            console.log(json);
            let div = document.getElementById("sendData");
            div.innerHTML = "Sent";
            div.style.padding = "15px";
            div.style.marginTop = "0px";
            div.style.fontFamily = "'Playfair Display', serif";

            }
            else
            {
                console.log("nu merge");
            }
        })
      }
      else
      {
            let div = document.getElementById("sendData");
            div.innerHTML = "Fill all fields";
            div.style.padding = "15px";
            div.style.marginTop = "0px";
            div.style.fontFamily = "'Playfair Display', serif";
      }
  }