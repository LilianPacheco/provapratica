let usuarios = [];

function adicionarUsuario(nome, idade, email) {
    if (!nome || !idade || email > 0) {
        console.log("Os campos devem ser respondidos corretamente.");
        return;
    }


    let usuario = {
    nome: nome,
    idade: idade,
    email: email
};

    usuarios.push(usuario);
    console.log('Usuário adicionado com sucesso.');
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        console.log("Usuários cadastrados:");
        for (let i = 0; i < usuarios.length; i++) {
            let usuario = usuarios[i];
            console.log(`${i + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
        }
    }
}


adicionarUsuario("Lilian", 16, "lilian_sens@estudante.sesisenai.org.br")
adicionarUsuario("Sofia", 16, "sofia_scheidt@estudante.sesisenai.org.br")

listarUsuarios();