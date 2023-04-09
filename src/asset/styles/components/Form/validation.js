// const validation= (userData, errors, setErrors)=>{
//     if(!userData.username) 
//         setErrors({...errors, username:"Porfavor completa este campo"});
//     else if(userData.username.length > 35 )
//         setErrors({...errors, username:"No puede superar los 35 caracteres"});
//     else if(
//         !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
//         setErrors({ ...errors, username: "Email inválido" })
//     }else{
//         setErrors({ ...errors, username: ""});
//     }

//     if(userData.password.length < 6 || userData.password.length > 10){ 
//         setErrors({...errors, password: "La contraseña es muy corta"});
//     }else if(!/\d/.test(userData.password)){
//         setErrors({ ...errors, password: " Debe contener almenos un número" });
//     } else {
//         setErrors({ ...errors, password: ""});
//     }
// };

// export default validation;


/////////////////////////////////////////

const validate = (state, errorsState) => {
    let errors = { ...errorsState };
  
   console.log("entre a validacion") 
  
    // ! EMAIL
    if (!state.username) errors.username = "Usuario incompleto";
    else if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/.test(state.username))
      errors.username = "Usuario incompleto";
      else if(state.username.length > 35)
      errors.username = "El usuario excede los 35 caracteres"
    else errors.username = "";
  
      // ! PASSWORD
      if (!state.password) errors.password = "Clave incompleta";
      else  if(!state.password.match(/\d/))
      errors.password = "La clave debe contener almenos un número"
      else if(state.password.length < 6 || state.password.length > 10)
      errors.password = "La clave debe contener entre 6 y 10 caracteres"
      else errors.password = "";
  
    return errors;
  }
  export default validate;

//CODIGO MORSE DE MIGUEL
// const validateEmail=(form,setErrors,errors)=>{

//     if(!form.email){
//         setErrors({...errors,email:"Email Vacio"});
//     }else{
//         if(form.email.length < 35){
//             if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)){
//                 setErrors({...errors,email:""});
//             }else{
//                 setErrors({...errors,email:"Email inválido"});
//             }
//         }else{
//             setErrors({...errors,email:"Supera los 35 caracteres"});
//         }
        
//     }
// }

// const validatePass=(form,setErrors,errors)=>{
//     if(!form.password){
//         setErrors({...errors,password:"Password Vacio"})
//     }else{
//         if(form.password.length < 6 || form.password.length > 10){
//             setErrors({...errors,password:"Debe tener entre 6 y 10 caracteres"})
//         }else{
//             if(!form.password.match(/\d/)){
//                 setErrors({...errors,password:"Debe tener al menos un numero"})
//             }else{
//                 setErrors({...errors,password:""})
//             }
//         }
//     }
// }


// module.exports={
//     validateEmail,
//     validatePass,
// }
