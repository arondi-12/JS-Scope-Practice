function loginUser(username, password){
    if (username==="admin"){
        if(password==='1234'){
            return 'Admin access granted';
        }else{
            return "Please enter correct password";
        }
    }else if(username==="user"){
        if(password==="password"){
            return "User access granted";
        }else{
            return "Please enter correct password";
        }
    }else if(username==="editor")
        if(password==="Editor"){
            return "Editor access granted";
        }else{
            return "Please enter correct password";
        }else if(username==="viewer"){
            if(password==="viewer"){
                return "Viewer access granted";
            }else{
                return 'please enter correct password';
            }
        }else{
            return 'Please enter correct username'
        }

}
console.log(loginUser('admin', '1234'))
console.log(loginUser('user', 'password'))
console.log(loginUser('editor', 'Editor'))
console.log(loginUser('viewer', 'viewer'))

console.log(loginUser('admin', '124'))
console.log(loginUser('user', 'pasword'))
console.log(loginUser('editor', 'Edior'))
console.log(loginUser('vieer', 'viewer'))