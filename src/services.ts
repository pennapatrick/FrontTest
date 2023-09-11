import axios from "axios";

export const base_url = "https://azmvwgnrk8.execute-api.us-east-1.amazonaws.com/dev"

function returnEndPoint(endpoint: string) {
    return base_url + endpoint;
}

export const axiosInstance = axios.create({

});

export const api = {
    async get(resource: string) {
        try {
            const response = await axiosInstance.get(returnEndPoint(resource));
            return response;
        } catch (error: any) {
            return error.response;
        }
    },
    async post(resource: string, body: any) {
        try {
            const response = await axiosInstance.post(returnEndPoint(resource), body);
            return response;
        } catch (error: any) {
            return error.response;
        }
    },
    async put(resource: string, body: any) {
        try {
            const response = await axiosInstance.put(returnEndPoint(resource), body);
            return response;
        } catch (error: any) {
            return error.response;
        }
    },
    async delete(resource: string) {
        try {
            const response = await axiosInstance.delete(returnEndPoint(resource));
            return response;
        } catch (error: any) {
            return error.response;
        }
    },
    async patch(resource: string, body: any) {
        try {
            const response = await axiosInstance.patch(returnEndPoint(resource), body);
            return response;
        } catch (error: any) {
            return error.response;
        }
    }
};