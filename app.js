/*Funcion que cambia el tamaño de una imagen*/

    let zoom = function()
     {
        let myId = document.getElementById("imagen");
    
        if(myId.className  == "img")
        {
            myId.setAttribute("class","img2");
    
        } else{
            myId.setAttribute("class","img");
        }
    
    }


/*Funcion que cambia de una imagen a otra*/


    let ImgRandom = "ola";

    let Colour = function()
    {

        let MyImg = document.getElementById("imagen");

        if(ImgRandom == "ola")
        {
           MyImg.src = "images/hola.png";
            ImgRandom = "hola";
        }
        else
        {
            MyImg.src = "images/ola.jpg";
            ImgRandom = "ola";
        }
    }

/*Funcion que abre o cierra el sidebar*/

const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click',function ()
{
    document.getElementById('SideBar').classList.toggle('Activation');
    console.log('olaaa');
}
);




