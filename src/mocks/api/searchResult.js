import { http, HttpResponse } from 'msw';
import { searchResultData } from '../api/data/searchResultData';

const handlers = [
  http.post(`/api/restaurants/category/:id`, ({ params, request }) => {
    return HttpResponse.json(searchResultData);
  }),
];

export default handlers;
