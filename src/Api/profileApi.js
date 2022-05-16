import axiosClient from "./axiosClient"

const profileApi = {
    getAll(id) {
        const url = `${id}`
        return axiosClient.get(url);
    }
}
export default profileApi;