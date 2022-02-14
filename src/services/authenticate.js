import {createApi, fetchBaseQuery,} from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const authenticateHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const authenticateBody = {
        loginName: 'amohelangt@chaperone.co.ls',
        password: '1'
        
    
}
const baseUrl = 'https://localhost:5011/piecejob/api/';

const createRequest = (url) => ({ url, headers: authenticateHeaders});
axios.post(baseUrl,{
    body: authenticateBody
}).then((res)=>{
    console.log(res.data)
})

export const authenticateAPI = createApi({
    reducerPath: 'authenticateAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        setUser: builder.query({
            query: () => createRequest(`Auth/authenticate`)
        }),
        getUser: builder.mutation({
            query: (body) => ({
                url: `Auth/authenticate`,
                method: 'POST',
                headers: `'Content-Type': 'application/x-www-form-urlencoded'`,
                body,
            }),
        })
    })
});
export const {
    useSetUserQuery,
    useGetUserMutation,
} = authenticateAPI; 


