import { types } from "../types/types";
import axios from 'axios';

/* 

export function organization(id){

    return function(dispatch){
        
        return axios.get(`http://localhost:3000/organizations/1/public`)
        .then(resp=>{
            console.log(resp.data)
             dispatch({
                type:types.ORGANIZATION,
                organization:resp.data
            }) 
        })
        .catch(err=>{
            console.log('Soy el error', err)
        })
    };
}; */