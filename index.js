let formData=document.querySelector(".form");
let submission=document.querySelector(".button");
let errorMassage=document.querySelectorAll(".error-message");
let emptyFieldMessages=document.querySelectorAll(".empty-field")
let showPasswordBtn = document.querySelector(".btn");
let firstName,lastName,email,password;
let ptarget,lnTarget,etarget,ftarget;
let field;

let nameRegx=/^[a-zA-Z ]{2,30}$/;
let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
console.log(errorMassage)
for(let error of errorMassage){
    error.classList.add("d-none")
}
for(let error of emptyFieldMessages){
    error.classList.add("d-none")
}
formData.addEventListener('keyup',(event)=>{
    event.preventDefault();
    field=event.target.dataset.key;
    switch(field){
        case "firstName": firstName=event.target.value
                          ftarget=event.target
        break; 
        case "lastName":lastName=event.target.value
                        lnTarget=event.target
        break;
        case "email":email=event.target.value
                     etarget=event.target
        break;
        case "password":password=event.target.value
                        ptarget=event.target
        break;
        default:
            firstName=lastName=email=password=""
            break;
    }
})

console.log(nameRegx.test(firstName))

submission.addEventListener('click',event=>{
    event.preventDefault();
    console.log(firstName,lastName,password,email)

    if(firstName){
        emptyFieldMessages[0].classList.add("d-none")
        if(!nameRegx.test(firstName)){
            ftarget.classList.add('error')
            errorMassage[0].classList.remove("d-none")
            ftarget=false
        }
        else{
            errorMassage[0].classList.add("d-none")
            ftarget.classList.remove("error")
            ftarget=true
        }
    }
    else{
        emptyFieldMessages[0].classList.remove("d-none")
        errorMassage[0].classList.add("d-none")
        ftarget=false
    }

    if(lastName){
        if(!nameRegx.test(lastName)){
            emptyFieldMessages[1].classList.add("d-none")
            lnTarget.classList.add('error')
            errorMassage[1].classList.remove("d-none")
            lnTarget=false
        }
        else{
            errorMassage[1].classList.add("d-none")
            lnTarget.classList.remove('error')
            lnTarget=true
        }
    }
    else{
        emptyFieldMessages[1].classList.remove("d-none")
        errorMassage[1].classList.add("d-none")
        lnTarget=false
    }   

    if(email){
        emptyFieldMessages[2].classList.add("d-none")
        if(!emailRegex.test(email)){
            etarget.classList.add('error')
            errorMassage[2].classList.remove("d-none")
            etarget=false
        }
        else{
            errorMassage[2].classList.add("d-none")
            etarget.classList.remove('error')
            etarget=true
        }
    }
    else{
        
        emptyFieldMessages[2].classList.remove("d-none")
        errorMassage[2].classList.add("d-none")
        etarget=false
    }

    if(password){
        emptyFieldMessages[3].classList.add("d-none")
        if(!passwordRegex.test(password)){
            ptarget.classList.add('error')
            errorMassage[3].classList.remove("d-none")
            ptarget=false
        }
        else{
            errorMassage[3].classList.add("d-none")
            ptarget.classList.remove('error')
            ptarget=true
        }
    }
    else{
        
        emptyFieldMessages[3].classList.add("d-none")
        errorMassage[3].classList.add("d-none")
        ptarget=false
    }


    if(ftarget && lnTarget && etarget && ptarget){
        ftarget.value = lnTarget.value = etarget.value = ptarget.value = "";
        window.location.href="sucess.html"
    }

    
})
showPasswordBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(ptarget.getAttribute("type")=="text"){
        ptarget.setAttribute("type","password")
    }else{
        ptarget.setAttribute("type","text")
    }

})

