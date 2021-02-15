import http from "../http-common";

class UserDataService{
    get(){
        return http.get(`/home`);
    }

    
}

export default new UserDataService();