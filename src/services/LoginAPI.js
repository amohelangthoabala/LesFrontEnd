/*import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const LoginHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const LoginBody = {
    loginName: 'amohelangt@chaperone.co.ls',
    password: '1'
}
const baseUrl = 'https://localhost:5011/piecejob/api';

const createRequest = (url) => ({ url, headers: LoginHeaders, body: LoginBody});

export const LoginAPI = createApi({
    reducerPath: 'LoginAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => createRequest(`Auth/authenticate`),
        })
    })
});
export const {
    useGetUserQuery,
} = LoginAPI; 
*/

