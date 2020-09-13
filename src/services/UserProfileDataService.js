import http from "../http-common";

class UserProfileDataService{
    // getAll(id){
    //     return http.get("/user_profile", id);
    // }

    get(id){
        return http.get(`/user_profile/${id}`);
    }

    create(data){
        return http.post('/user_profile', data);
    }

    update(data){
        return http.put('/user_profile', data);
    }

    delete(id){
        return http.delete(`/user_profile/${id}`);
    }

    // deleteAll(){
    //     return http.delete('/user_profile');
    // }

    // findByTitle(title){
    //     return http.get(`/user_profile?title=${title}`);
    // }
}

export default new UserProfileDataService();