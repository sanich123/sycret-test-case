import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, TIMEOUT, API_KEY, REDUCER_NAME } from "./const";

export const sycretApi = createApi({
  reducerPath: REDUCER_NAME,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    timeout: TIMEOUT,
  }),

  endpoints: (builder) => ({
    getCertificatesByApiKey: builder.query({
      query: (methodName: string) =>
        `?ApiKey=${API_KEY}&MethodName=${methodName}`,
    }),
  }),
});

export const { useGetCertificatesByApiKeyQuery } = sycretApi;
