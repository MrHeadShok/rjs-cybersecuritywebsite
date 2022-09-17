export default function validateForm({name, email, password, confirmPassword}){
    if(!name.trim()){
        return 'Please set a username'
    }

    const regex=
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
    if(!email){
        return 'Please introduce your email';
    }else if (regex.test(email.toLocalLowerCase)){
        return 'Email address is not valid'
    }

    if(!password){
        return 'Password is required'
    }else if (password.length<6){
        return 'Minimum Password length is 6 characters'
    }

    if(!confirmPassword){
        return 'You need to confirm your password.'
    }else if (confirmPassword!==password){
        return 'Password do not match.'
    }
    return null
}