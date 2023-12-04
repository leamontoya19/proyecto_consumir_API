function loadUser(){
    const apiUrl='https://randomuser.me/api/'; //API url
    fetch(apiUrl)
    .then(res=>res.json()) 
    .then(resJson=>{       
        console.log(resJson)

        const user=resJson.results[0]; //comienza con 0 porque es un Array de un solo elemento.
        
        const nameUser=user.name;
        const imageUser=user.picture.large;
        const ageUser=user.dob;
        showUser(nameUser, imageUser,ageUser);
       
    })
    .catch(error=>error) //se usa catch para que el programa no se rompa por algun error externo.
           
}
loadUser()

function showUser(nameUser, imageUser,ageUser){
    const app=document.getElementById("app");//la constante app!

    //al elemento app se le inserta la informcion del usuario:
    app.innerHTML=`
    <h3 class="userName">${nameUser.first} ${nameUser.last}</h3>
    <div>
        <img src=${imageUser}   alt="User Photo"/>
        <p class="age"> ${ageUser.age} ${" years old"} </p>
    </div>
    `;
}

//Relacionando el botón para iterar el array.
//luego, relacionando el btn deñ HTML aquí en JS.
const btnNext = document.getElementById("next-user");
//asocio la funcion al evento onclick con del botón
btnNext.addEventListener("click", loadUser)

//btn de like
function toggleHeart(){
    const heart = document.getElementById("heart");
    if (heart.class.includes("bi bi-heart")){
        

    }

}
