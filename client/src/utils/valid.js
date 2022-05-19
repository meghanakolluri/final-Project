const valid = ({fullname, username, email, password, cf_password}) => {
    const err = {}

    if(!fullname) {
        err.fullname = "Please add your full name."
    }else if(fullname.length > 25){
        err.fullname = "Full name is up to 25 characters long."
    }

    if(!username) {
        err.username = "Please add your user name."
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "User name is up to 25 characters long."
    }

    if(!email) {
        err.email = "Please add your email."
    }else if(!validateEmail(email)){
        err.email = "Enter correct email format! Business emails are only allowed."
    }

    if(!password) {
        err.password = "Please add your password."
    }else if(password.length < 6){
        err.password = "Password must be at least 6 characters."
    }

    if(password !== cf_password) {
        err.cf_password = "Confirm password did not match."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(?!.+@(gmail|google|yahoo|outlook|hotmail|msn)\..+)(.+@.+\..+)$/
    return re.test(email);
}
  
export default valid