import http from "../http-common";

class AddressDataService{
    getAll(name){
        return http.get(`/address/${name}`);
    }
}

export default new AddressDataService();