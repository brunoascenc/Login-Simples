function validar(){
    const nomeUsuario = document.getElementById("usuario")
    const senhaUsuario = document.getElementById("senha")

    if(nomeUsuario.value == ""){
        alert("Insira o nome de usuario")
        return false

    }else if (senhaUsuario.value == ""){
        alert ("Ta faltando a senha")
        return false
        
    }else if(nomeUsuario.value=="" || senhaUsuario.value==""){
        alert("preencha os campos")
        return false
        
    }else{
        true
    }
}