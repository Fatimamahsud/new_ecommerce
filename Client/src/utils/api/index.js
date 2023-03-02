import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_URL } from '../constants';

const API = axios.create({baseURL:SERVER_URL

});

API.interceptors.request.use(async(req)=>{
    const token = await AsyncStorage.getItem('token');
    if(token){
        req.headers.authorization = `Bearer ${token}`;
    }
    return req;
});

export const signUpAPI = form => API.post('/user/signUp',form);
export const signInAPI = form => API.post('./user/signIn',form);
export const addItemsAPI = form => API.post('./product/addItems',form);
export const viewProductAPI = form => API.get('./product/viewProduct',form);
export const deleteProductAPI = form => API.post('./product/deleteProduct', form);
export const viewProductByIdAPI = id => API.get(`./product/viewProductById/${id}`);
export const updateProductAPI = form => API.patch('./product/updateProduct',form);