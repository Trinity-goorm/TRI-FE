import image1 from "../img/chinese_food.jpg";
import image2 from "../img/realJapanese.jpg";
import image3 from "../img/menu4.jpg";
import image4 from "../img/menu1.jpg";
import image5 from "../img/brunch.jpg";

const myReservation = [
    {
        title: "펑즈",
        category: "중식",
        date: "2025-02-20",
        time: "12:00",
        seatType: "테이블석",
        seatMinCapacity: 1,
        seatMaxCapacity: 2,
        imageUrl: image1
    },
    {
        title: "사쿠라",
        category: "일식",
        date: "2025-02-22",
        time: "18:30",
        seatType: "다다미석",
        seatMinCapacity: 2,
        seatMaxCapacity: 4,
        imageUrl: image2
    },
    {
        title: "이탈리아노",
        category: "양식",
        date: "2025-02-25",
        time: "19:00",
        seatType: "부스석",
        seatMinCapacity: 2,
        seatMaxCapacity: 6,
        imageUrl: image3
    },
    {
        title: "한옥정",
        category: "한식",
        date: "2025-02-28",
        time: "13:00",
        seatType: "온돌석",
        seatMinCapacity: 4,
        seatMaxCapacity: 8,
        imageUrl: image4
    },
    {
        title: "모닝브런치",
        category: "브런치",
        date: "2025-03-02",
        time: "10:30",
        seatType: "야외석",
        seatMinCapacity: 1,
        seatMaxCapacity: 4,
        imageUrl: image5
    }
];

export default myReservation;