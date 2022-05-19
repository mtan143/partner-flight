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
    }
}
export default flightApi;