import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const piecejobApiHeaders = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFtb2hlbGFuZ3RAY2hhcGVyb25lLmNvLmxzIiwibmJmIjoxNjQwNTkzODUzLCJleHAiOjE2NDA2MDgyNTMsImlhdCI6MTY0MDU5Mzg1M30.Cyd0j0qLTDc1ShHmkx0fl2bO_qoaE0OJVfbFhoHi-0k', 
    'Content-Type': 'application/x-www-form-urlencoded'
}
const baseUrl = 'https://localhost:5011/piecejob/api';

const createRequest = (url) => ({ url, headers: piecejobApiHeaders});

export const piecejobAPI = createApi({
    reducerPath: 'piecejobAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getServices: builder.query({
            query: (count) => createRequest(`/AService/GetServices?limit=${count}`)
        }),

        setUser: builder.mutation({
            query: (authenticateBody) => ({
                url: `Auth/authenticate`,
                method: 'POST',
                headers: `'Content-Type': 'application/x-www-form-urlencoded'`,
                body: {
                    loginName: 'amohelangt@chaperone.co.ls',
                    password: '1'
                },
            }),
            transformResponse: (response, meta, arg) => response?.data,
        })
    }),


});
export const {
    useGetServicesQuery,
    useSetUserMutation,
} = piecejobAPI; 
