const [user, password] = document.querySelectorAll('input')
const button = document.querySelectorAll('figure')[4]
function handleChange(){
    const [user, password] = login
    if(user.value.lenght >= 4 && password.value.lenght >= 8){
        button.classList.add('aproved')
        console.log('funcionou')
    }else{
        button.classList.remove('aproved')
    }
}
login.forEach(function(input){
    input.addEventListener('input', handleChange)
})