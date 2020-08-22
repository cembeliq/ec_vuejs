import http from "../http-common";

class ProductDataService{
    getAll(name){
        return http.get(`/product/${name}`);
    }

    get(id){
        return http.get(`/product/detail/${id}`);
    }

    create(data){
        return http.post('/product', data);
    }

    update(id, data){
        return http.put(`/product/${id}`, data);
    }

    delete(id){
        return http.delete(`/product/${id}`);
    }

    deleteAll(){
        return http.delete('/product');
    }

    findByName(name){
        return http.get(`/product?name=${name}`);
    }
}

export default new ProductDataService();