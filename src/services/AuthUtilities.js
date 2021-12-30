import axios from 'axios';

function setCursor(state, btnid){
    document.getElementById(btnid).style.cursor = state;
    document.body.style.cursor = state;
}

export const jwtValidate = async({setAuth}) => {
    const jwt = localStorage.getItem("jwt");
    const username = localStorage.getItem("username");
    const jsonData = {"username": username, "jwt": jwt};

    //REQUEST JWT VALIDATION
    const response = await axios.post('http://localhost:8080/validate', jsonData);
    const result = await response.data;

    //UPDATE AUTH STATE
    if(await result === true){
        setAuth(1);
    }else{
            setAuth(0);
        }
};

export const logOut = () =>{
    localStorage.setItem("username", " ")
    localStorage.setItem("jwt", " ")
    window.location.href = "/login";
}

export const Login = async(username, password) => {
        setCursor("wait", "login-btn")

        function incorrect_login(){
            document.getElementById("login_error").innerHTML = 
            "<b>Entered credentials seem to be incorrect!<br>Please, try again.</b>";
            setCursor("auto", "login-btn")
        }

        if((username.length > 3) && (password.length > 5)){
            try {
                    //POST REQUEST
                    const response = await axios.post('http://localhost:8080/login', {"username": username,
                    "password": password});
                    //SAVE JWT IN LOCALSTORAGE
                    console.log("SUCCESFUL LOGIN!")
                    await localStorage.setItem("jwt", JSON.stringify(response.data.jwt).slice(1,-1));
                    await localStorage.setItem("username", username);
                    window.location.href = "/home";
                }catch (e) {
                    incorrect_login();
            }
        }else{
            incorrect_login();
        }
}


//REGISTRATION OF A NEW USER
export const Register = async(fname, lname, username, password,
    c_password, email, country, bdate, gender, {setButtonPopup}) => {
    setCursor("wait", "register-btn")
    
    async function display_error(error){
        if(error === "0"){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: Username must be at least 4 characters long</b>";
        }else if(error === "1"){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: Password must be at least 6 characters long</b>";
        }else if(error === "2"){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: Password confirmation does not match with your password.</b>";
        }else if(error === "3"){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: Please enter a valid email</b>";
        }else if(error === "4"){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: You must select a gender option</b>";
        }else if(error === "5"){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: You must select your country</b>";
        }else if(error === "6"){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: Please enter a valid date</b>";
        }else if(error === "7"){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: Please enter your first and last name</b>";
        }else if(error === 8){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: Your username is not available</b>";
        }else if(error === 9){
            document.getElementById("register-text").innerHTML = 
            "<b>ERROR: There´s an account already registered with that email</b>";
        }
        
        document.getElementById("register-text").style.color = 
        "red";
        setCursor("auto", "register-btn")
    }
    
    function ValidateEmail(mail) 
        {if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return (true)
        }
            return (false)
        }
    
    function dateValidate(date){
        let x = date.split("-");
        if(1901 < x[0] < 2013){
            return true
        }
        return false
    }

    async function check_availability(){
        const res = await axios.put('http://localhost:8080/register', {"user": username, "email": email});
        return await res.data;
    }

    async function database_register(){
        axios.post('http://localhost:8080/register', 
        {
            "user": username,
            "firstname": fname,
            "lastname": lname,
            "password": password,
            "email": email,
            "birthdate": bdate,
            "country": country,
            "gender": gender
         });
    }

    //CHECK FOR INPUT ERRORS
    let error;
        //VALIDATE USER LENGTH
        if(username.length < 3){
            error = "0";
        //VALIDATE PASSWORD LENGTH
        }else if(password.length < 5){
            error = "1";
        //VALIDATE PASSOWRD CONFIRMATION 
        }else if(password !== c_password){
            error = "2";
        //VALIDATE MAILS FORMAT
        }else if(ValidateEmail(email) === false){
            error = "3";
        //VALIDATE GENDER 
        }else if(gender === "Gender"){
            error = "4";
        //VALIDATE COUNTRY
        }else if(country === "Country"){
            error = "5";
        //VALIDATE DATE FORMAT
        }else if(dateValidate(bdate) === false || bdate === ""){
            error = "6";
        }else if(fname === "" || lname === ""){
            error = "7";
        }else{
            error = await check_availability(username, email);      
        }

    //PROCEEDS TO REGISTRATION OR SHOWS THE INPUT ERROR
    if(error === -1){
        database_register();
        setButtonPopup(true);
    }else{
        console.log("error", error);
        await display_error(error);
    }
}

export const accountActivate = async({token}, setTitle, setText, setPopup) => {
    const res = await axios.get('http://localhost:8080/confirm-account?token='+ token);
    
    if(res.data === false){
        setPopup(true);
        setTitle("ERROR!");
        setText("The link you provided is incorrect or your account has already been activated.");
    }else{
        setPopup(true);
    }
}

//SENDS REQUEST FOR AN EMAIL SENDING WITH A PASSWORD RESET LINK
export const pwdReset = async(email) => {

    setCursor("wait", "btn-register-success");
    const res = await axios.get('http://localhost:8080/request-pwd-reset?email='+ email);
    const error_container = document.getElementById("pwdResetError");
    

    if(await res.data){
        error_container.innerHTML = 
        "<b>An email for a password reset has sent to you! <br>Please, check your inbox.</b>";
        error_container.style.color = "green";
        document.getElementById("btn-register-success").disabled = true;
        setCursor("auto", "btn-register-success");
    }else{
        error_container.innerHTML = 
        "<b>It seems that your email doesn't matchs with any account.</b>";
        error_container.style.color = "red";
        setCursor("auto", "btn-register-success");
    }
    
}

export const requestPwdReset = async(pass, c_pass, token) => {

    function display(message, color){
        const error_container = document.getElementById("pwdResetError");
        error_container.innerHTML = "<b>"+ message +"</b>";
        error_container.style.color = color;
    }

    if(pass !== c_pass){
        display("The passwords you entered does not match.", "red")
    }else if(pass.length < 5){   
        display("Your new password has to be more than 5 characters length.", "red")
    }else{
        setCursor("wait", "btn-register-success")
        document.getElementById("btn-register-success").disabled = true;
        const url = ("http://localhost:8080/reset-password?pwd="+pass+"&token="+token); 
        const res = await axios.put(url);

        if (res.data === true){
            display("Success! Your password has been reseted.", "green");
            setCursor("auto", "btn-register-success");
        }else{
            display("The link you provided is invalid.", "red");
            setCursor("auto", "btn-register-success");
        }
    }
}