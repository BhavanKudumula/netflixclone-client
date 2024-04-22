// export const inputValidation = (email, password) => {
//     const isEmailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
//     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/.test(password)

//     if(!isEmailValid) return "Please Enter Valid Email"
//     if(!isPasswordValid) return "Please Enter Valid Password"

//     return null;
// }
export const emailValidation = (email) => {
    const isEmailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    
    if(!isEmailValid) return "Please Enter Valid Email";
    
    return null;
}

export const passwordValidation = (password) => {
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/.test(password)

    if(!isPasswordValid) return "Please Enter Valid Password"

    return null;
}



