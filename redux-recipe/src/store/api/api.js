import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:4200/recipes';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipes'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => '/?_sort=name',
            providesTags: () => [
                {
                    type: 'Recipes',
                },
            ],
        }),
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST',
            }),
            invalidatesTags: [
                {
                    type: 'Recipes',
                },
            ],
        }),
    }),
});

export const { useGetRecipesQuery, useCreateRecipeMutation } = api;
