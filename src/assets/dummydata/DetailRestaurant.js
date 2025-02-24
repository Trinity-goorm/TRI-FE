import chinese_food from "../img/chinese_food.jpg";
import steak from "../img/steak.jpg";
import menu1 from "../img/menu1.jpg";
import menu2 from "../img/menu2.jpg";
import menu3 from "../img/menu3.jpeg";
import menu4 from "../img/menu4.jpg";
import menu7 from "../img/menu7.jpg";


const DetailRestaurant  = {
    id: 1,
    name: "팡즈",
    image_urls: [chinese_food,steak],
    star: 4.4,
    category:"중식",
    location: "잠실",
    latitude: 37.40066449887131,
    longitude: 127.0950109129372,
    address: "경기 성남시 분당구 판교역로 230 삼환하이펙스 B동 1층 120-1호 (우)13493",
    caution: "10년 맛집 입니다!!!",
    convenience:"WIFI\n" +
        "동물출입\n" +
        "주차\n" +
        "휠체어사용\n" +
        "놀이방\n" +
        "흡연실\n",
    phone_number:"02-417-8868",
    average_price: "1-2 만원",
    operating_hour: "월-토 : 11:00 ~ 23:00",
    menuList: [
        {
            menu_name: "짜장도삭면",
            price: 9000,
            image_url: menu1
        },
        {
            menu_name: "도삭면",
            price: 10000,
            image_url: menu2
        },
        {
            menu_name: "탄탄비빔면",
            price: 8000,
            image_url:menu3
        },
        {
            menu_name: "소룡포",
            price:8000,
            image_url: menu4
        },
        {
            menu_name: "어향육슬 덮밥",
            price: 80000,
            image_url:menu7
        },
    ]



}
export default DetailRestaurant