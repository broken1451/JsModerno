const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuario = 'https://reqres.in/api/users?page=2'

// cloudDinary 
const cloudPrest = 'tevlmz5f';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dbvuiwsrr/upload';



// fetch(url)
// fetch(jokeUrl).then((res)=>{
//     console.log(res);

//     // se extrae la informacion de la siguiente manera, extrae el body en formato json 
//     // res.json().then((data)=>{
//         // body: ReadableStream es nuestra informacion el, el body de la peticion, la data del servicion y se extrade la siguinete manera
//     //     console.log(data)
//     // });

//     // se extrae la informacion de la siguiente manera, extrae el body en formato json 
//     res.json().then((data)=>{
//         console.log(data)
//     });

// });
       

   
// fetch(jokeUrl)
//     .then(res => {return  res.json();})
//     .then((data)=>{console.log(data);})


// si tiene un asycn regresa una promesa
const obtenerChistes = async() => {

    
    try {
        const resp =  await fetch(jokeUrl)
        
        if (resp.status != 200) {
            throw `No se pudo realizar la peticion`;
        }
     
        // const chiste = await resp.json();
        const {icon_url,id,value} = await resp.json();
     
         //    console.log(resp);
            // console.log(chiste);
        // return  chiste;
        return  {icon_url,id,value};

   } catch (error) {
        throw error
   }

}


const obtenerUsuarios = async() =>{
    const resp = await fetch(urlUsuario)
    const data = await resp.json();
    // const {data:usuario} = await resp.json();
    // console.log(data);
    return data.data;
    // return usuario;
}   


// archivo de tipo file
const subirImagen = async (imagenAsubir)=>{
    var formdata = new FormData();
    formdata.append("upload_preset", cloudPrest);
    formdata.append("file", imagenAsubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formdata
        });

        if (resp.ok) {
            const cloudRep = await resp.json();
            console.log(cloudRep);
            return cloudRep;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }

}




export{
    obtenerChistes,
    obtenerUsuarios,
    subirImagen
}