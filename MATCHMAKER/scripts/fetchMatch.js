window.onload=function (){
    cargarInfo();
}

function cargarInfo(){
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
     
    const nac = urlParams.get("nac");
    const genero = urlParams.get("genero");

    const request = new Request (
    `https://randomuser.me/api/?nat=${nac}&gender=${genero}`,
    {
        method: `get`,
        headers: new Headers({
            "Content-Type": "application/json"
        }) 
    }  
    );

    fetch(request).then(function(response){
        return response.json();
    }) .then(funcion(data){
        console.log(data);
    }).catch(funcion(error){
    alert("Hubo un error encontrando a tu otra mitad");
    })
}

function llenarInfo(data){
    const img = document 
}