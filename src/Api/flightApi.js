import axiosClient from "./axiosClient"

const flightApi = {
    getAll(id) {
        const url = `/customers/flights/airline/${id}`
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/customers/flights/create'
        return axiosClient.post(url, data);
    },
    updateStatus(data) {
        const url = '/customers/flights/status'
        return axiosClient.post(url, data);
    },
    getAllStatisticYear(id){
        const url = `/customers/flights/airline/statistic/${id}`
        return axiosClient.get(url);
    },
    getAllStatisticMonth(id){
        const url = `/customers/flights/airline/statistic/month/${id}`
        return axiosClient.get(url);
    },
    getAllStatisticClassType(id){
        const url =`/customers/flights/airline/statistic/classtype/${id}`
        return axiosClient.get(url);
    },
    syncAccount(data){
        const url = '/partners/account'
        return axiosClient.post(url,data);
    },
    getPartnerCode(id){
        const url =`/partners/account/${id}`
        return axiosClient.get(url);
    },
    getTickets(id){
        const url =`/customers/tickets/transaction-partner/${id}`
        return axiosClient.get(url);        
    }
}
export default flightApi;