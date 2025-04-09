import { apiService } from '../api/api.ts';
import {useParams} from "react-router-dom";
import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {AxiosError} from "axios";


export const useOrders = () => {
    const { uuid } = useParams<{ uuid: string }>();

    const queryFn = async () => {
        const url = `/orders/${uuid || 0}`;

        const response = await apiService.get(url);

        return response.data;
    };


    const queryOptions: UseQueryOptions<never[], AxiosError> = {
        queryKey: ['orders'],
        // @ts-ignore
        queryFn,
    };

    const { data, isLoading, isError, error, refetch } = useQuery(queryOptions);

    return {
        orders: data,
        isLoading,
        hasError: isError,
        errorMessage: isError && error ? error.message : null,
        refetchOrders: refetch,
    };
};
