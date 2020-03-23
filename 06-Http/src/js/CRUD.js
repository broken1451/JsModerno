const urlCrud = 'https://reqres.in/api/users';


const getUsuario = async (id) => {
    const resp = await fetch(`${urlCrud}/${id}`);
    const data = await resp.json();
    // console.log( data);
    return data.data;
}



const crearUsuario = async (usuario) => {

    // header es info adicional  que el backend  puede q lo pida
    const resp = await fetch(`${urlCrud}`,{
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();
    // console.log( data);
    return data
    
}


const actualizarUsuario = async (usuario,id) => {

    // header es info adicional  que el backend  puede q lo pida
    const resp = await fetch(`${urlCrud}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();
    // console.log( data);
    return data
    
}


const borrarUsuario = async (id) => {
    const resp = await fetch(`${urlCrud}/${id}`,{
        method:'DELETE'
    });
    
    const data = await resp;
    console.log( data);
    if (data.ok) {
        return 'Borrado'
    } else {
        throw 'OCURRIO UN ERROR no se pudo eliminar el registro'
    }
    // return data.data;

}




export{
    getUsuario,crearUsuario,actualizarUsuario,borrarUsuario
}


