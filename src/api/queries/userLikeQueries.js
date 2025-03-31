import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import GetLikeRestaurants from '../save/get/GetLikeRestaurants';
import PostLike from '../save/post/PostLike';
import DeleteLike from '../save/delete/DeleteLike';

export const useGetLikeRestId = () => {
  return useQuery({
    queryKey: ['user', 'like'],
    queryFn: GetLikeRestaurants,
    select: (data) => data.map((item) => item.restaurantId),
  });
};

export const usePostLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (restaurant) => PostLike(restaurant.restaurantId),
    onMutate: async (restaurant) => {
      await queryClient.cancelQueries(['user', 'like']);

      const previousLikeData = queryClient.getQueryData(['user', 'like']);
      queryClient.setQueryData(['user', 'like'], (oldLikesData) => [
        ...oldLikesData,
        restaurant,
      ]);
      return { previousLikeData };
    },
    onError: (error, restaurant, context) => {
      queryClient.setQueryData(['user', 'like'], context.previousLikeData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['user', 'like']);
    },
  });
};

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteLike,
    onMutate: async (restaurantId) => {
      await queryClient.cancelQueries(['user', 'like']);

      const previousLikeData = queryClient.getQueryData(['user', 'like']);
      queryClient.setQueryData(['user', 'like'], (oldLikesData) =>
        oldLikesData.filter((item) => item.restaurantId !== restaurantId)
      );
      return { previousLikeData };
    },
    onError: (error, restaurant, context) => {
      queryClient.setQueryData(['user', 'like'], context.previousLikeData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['user', 'like']);
    },
  });
};
