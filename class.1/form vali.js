






const form = document.getElementById("form")



const uname = document.getElementById("FullName")


const email = document.getElementById("Password")



const password = document.getElementById("RE-password")

const cpassword = document.getElementById("Address")


form.addEventListener('save',(e)=>{

    e.preventDefault()
    validate()
})



function validate(){
    let nameValue = uname.value.trim()
    //let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let Re-passwordValue = Re-password.value.trim()
   

    //User name check

    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else{        
        setSuccesss(uname)
    }
    //email check
    if(UsernameValue===''){
        setError(Username,'passwordValue cannot be empty')
    }  
    else if(!emailCheck(UsernameValue)){
        setError(Username,'Enter Valid Password Id')
    }
    else{        
        setSuccesss(Username)
    }

    
    //Password check

    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'user name should be minimum 8 characters')
    }
    else{        
        setSuccesss(password)
    }

      
    //Confirm Password check

    if(Re-passwordValue===''){
        setError(Re-password,'password cannot be empty')
    }
    else if(Re-passwordValue !==passwordValue){
        setError(Re-password,'passwords not matched')
    }
    else{        
        setSuccesss(Re-password)
    }

    
}


 