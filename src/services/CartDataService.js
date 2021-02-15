import http from "../http-common";
// import axios from "axios";

class OrderDataService{
    // getAll(id){
    //     return http.get("/cart", id);
    // }

    get(id){
        return http.get(`/cart/${id}`);
    }

    

    create(data){
        // let user = JSON.parse(localStorage.getItem('user'));
        // return axios.create({
    
        //     baseURL: process.env.VUE_APP_URL_API + "api",
        //     timeout: 5000,
        //     // withCredentials: false,
        //     headers: {
        //         "Content-Type": "application/json;charset=UTF-8",
        //         'x-access-token': user ? user.accessToken : null
        //         // "Accept": "application/json",
        //         // "Access-Control-Allow-Origin": 'SET_ME',
        //         // "Authorization": state.jwt
        //     }
        // })
        // .post('/cart', data);
        // alert("testst");
        // console.log(localStorage.getItem('user'));
        // // console.log(http.post('/cart'));
        return http.post('/cart', data);
    }

    update(data){
        return http.put('/cart', data);
    }

    delete(id){
        return http.delete(`/cart/${id}`);
    }

    // deleteAll(){
    //     return http.delete('/cart');
    // }

    // findByTitle(title){
    //     return http.get(`/cart?title=${title}`);
    // }
}

export default new OrderDataService();