import http from "../http-common";

class AuthService{
    login(user){
        return http.post("/login", {
            email: user.email,
            password: user.password
        })
        .then(response => {
            // console.log(response.data.token)
            if(response.data.token){
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout(){
        localStorage.removeItem('user');
    }

    register(user){
        return http.post("/auth/signup", {
            username: user.username,
            email: user.email,
            phone: user.phone,
            address: user.address,
            district_id: user.district_id,
            password: user.password
        });
    }
}

export default new AuthService();