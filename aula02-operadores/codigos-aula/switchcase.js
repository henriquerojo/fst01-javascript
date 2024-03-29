// switch / case é uma outra estrutura condicional

let tipoUsuario = 1; // usuario comum = 1 | usuario admin = 2

switch (tipoUsuario) {
    case 1:
        alert("Usuário COMUM");
        break;
    case 2:
        alert("Usuário ADMIN");
        break;
    default:
        alert("Usuário inválido");
        break;
}
alert("FIM");
