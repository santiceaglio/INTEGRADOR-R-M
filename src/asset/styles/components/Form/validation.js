const validateEmail=(form,setErrors,errors)=>{

    if(!form.email){
        setErrors({...errors,email:"Email Vacio"});
    }else{
        if(form.email.length < 35){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)){
                setErrors({...errors,email:""});
            }else{
                setErrors({...errors,email:"Email inválido"});
            }
        }else{
            setErrors({...errors,email:"Supera los 35 caracteres"});
        }
        
    }
}

const validatePass=(form,setErrors,errors)=>{
    if(!form.password){
        setErrors({...errors,password:"Password Vacio"})
    }else{
        if(form.password.length < 6 || form.password.length > 10){
            setErrors({...errors,password:"Debe tener entre 6 y 10 caracteres"})
        }else{
            if(!form.password.match(/\d/)){
                setErrors({...errors,password:"Debe tener al menos un numero"})
            }else{
                setErrors({...errors,password:""})
            }
        }
    }
}


module.exports={
    validateEmail,
    validatePass,
}
