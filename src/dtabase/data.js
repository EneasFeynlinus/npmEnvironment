async function connecToDatabase(user, password) {
    if(user === "naruto" && password === "uzumaki") {
        console.log("Conexão com o banco de dados estabelecida");
    } else {
        console.log("Falha na conexão com o banco de dados");
    }
}


export default connecToDatabase