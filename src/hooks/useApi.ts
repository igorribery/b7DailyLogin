import axios from "axios";


const api = axios.create({
    baseURL: 'api.google.com'
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id: 3, name: 'José', email: 'jose@gmail.com'},
        };


        const res = await api.post('/validate', {token});
        return res.data;

    },
    signIn : async (email: string, password: string) => {
        return {
            user: {id: 3, name: 'José', email: 'jose@gmail.com'},
            token: '123456'
        };
        const res = await api.post('/signin', {email, password});
        return res.data;
    },
    signOut: async () => {
        
        return {status: true};
        const res = await api.post('/logout');
        return res.data;
    }
})