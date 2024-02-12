
function Login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;
    
    if (email === '') {
        document.getElementById('emailError').innerHTML = 'Please Enter your Email ';
        valid = false;
    } else {
        document.getElementById('emailError').innerHTML = '';
    }

    if (password === '') {
        document.getElementById('passwordError').innerHTML = 'Password is required';
        valid = false;
    } else {
        document.getElementById('passwordError').innerHTML = '';
    }

    if (valid) {
        console.log('Email:', email);
        console.log('Password:', password);
    }
}