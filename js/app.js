function loadUser(){
    const apiUrl='https://randomuser.me/api/'; 
    fetch(apiUrl)
    .then(res=>res.json()) 
    .then(resJson=>{       

        const user=resJson.results[0]; 
        
        const nameUser=user.name;
        const imageUser=user.picture.large;
        const ageUser=user.dob;
        const genderUser=user.gender;
        showUser(nameUser, imageUser,genderUser,ageUser);
    
       
    })
    .catch(error=>error);
    

}
loadUser()

function showUser(nameUser, imageUser,genderUser,ageUser){
    const app=document.getElementById("app");


    app.innerHTML=`
    <h3 class="userName">${nameUser.first} ${nameUser.last}</h3>
    <div>
        <img src=${imageUser}   alt="User Photo"/>
        <p> ${genderUser} </p>
        <p class="age"> ${ageUser.age} ${" years old"} </p>
    </div>
    `;
}

//Relacionando el botón para iterar el array.
const btnNext = document.getElementById("next-user");
//asocio la funcion al evento onclick con del botón
btnNext.addEventListener("click", loadUser);

//-------Filtrado por género-----
function filterFemaleUsers() {
    const filteredApiUrl = 'https://randomuser.me/api/?gender=female';
    fetch(filteredApiUrl)
        .then(res => res.json())
        .then(resJson => {
            const femaleUsers = resJson.results;
            femaleUsers.forEach(user => {
                const nameUser = user.name;
                const imageUser = user.picture.large;
                const ageUser = user.dob;
                const genderUser = user.gender;
                showUser(nameUser, imageUser, genderUser, ageUser);
            });
        })
        .catch(error => error);
}

const btnFem = document.getElementById("gender-fem");
btnFem.addEventListener("click", filterFemaleUsers);

function filterMaleUsers() {
    const filteredApiUrlMale = 'https://randomuser.me/api/?gender=male';
    fetch(filteredApiUrlMale)
        .then(res => res.json())
        .then(resJson => {
            const maleUsers = resJson.results;
            maleUsers.forEach(user => {
                const nameUser = user.name;
                const imageUser = user.picture.large;
                const ageUser = user.dob;
                const genderUser = user.gender;
                showUser(nameUser, imageUser, genderUser, ageUser);
            });
        })
        .catch(error => error);
}

const btnMale = document.getElementById("gender-male");
btnMale.addEventListener("click", filterMaleUsers);










