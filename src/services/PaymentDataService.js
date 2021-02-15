import http from "../http-common";

class PaymentDataService{
    pay(){
        return http.post(`/payment`);
    }
}

export default new PaymentDataService();