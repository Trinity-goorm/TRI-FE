import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import GetCategoryRestList from '../search/GetCategoryRestList';
import GetKeywordRestList from '../search/GetKeywordRestList';

export const useGetCatRestaurant = (categoryId, sortType) => {
  return useInfiniteQuery({
    queryKey: ['category-restaurants', sortType],
    queryFn: ({ pageParam = 1 }) =>
      GetCategoryRestList(categoryId, pageParam, sortType),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 30 ? allPages.length + 1 : undefined;
    },
    select: (data) => {
      const allData = data.pages.reduce((acc, cur) => acc.concat(...cur));
      return {
        ...data,
        allData,
      };
    },
    gcTime: 0,
    refetchOnWindowFocus: false,
  });
};

export const useGetKeyRestaurant = (keyword, sortType) => {
  return useInfiniteQuery({
    queryKey: ['keyword-restaurants', sortType],
    queryFn: ({ pageParam = 1 }) =>
      GetKeywordRestList(keyword, pageParam, sortType),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 30 ? allPages.length + 1 : undefined;
    },
    select: (data) => {
      const allData = data.pages.reduce((acc, cur) => acc.concat(...cur));
      return {
        ...data,
        allData,
      };
    },
    gcTime: 0,
    refetchOnWindowFocus: false,
  });
};
