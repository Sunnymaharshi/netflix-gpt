export const validateData = (name,email,password)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email.value)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password.value)
    let nameErr = null;
    let emailErr = null;
    let passwordErr = null;
    let backendErr = null;
    if(!name || name.value.length<3) nameErr = "Name must have atleast 3 characters"
    if(!email || !isEmailValid) emailErr = "Email is not valid"
    if(!password || !isPasswordValid) passwordErr = "Password must have minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    return {nameErr,emailErr,passwordErr,backendErr};
}