import beef from "../img/beef.jpg";
import korean from "../img/korean_food.jpg";
import brunch from "../img/brunch.jpg";
import chinese_food from "../img/chinese_food.jpg";
import french from "../img/french.jpg";
import italian from "../img/italian.jpg";
import japaneseFood from "../img/japaneseFood.jpg";
import pasta from "../img/pasta.jpg";
import steak from "../img/steak.jpg";
import realJapanese from "../img/realJapanese.jpg";
import hanwoo from  "../img/hanwoo_omakase.jpg";
import wine from  "../img/wineBar.jpg";

const RecommendedList = [
    {
        id: 10,
        name: "팡즈",
        image: chinese_food,
        star: 4.4,
        category: "중식",
        location: "잠실",
        isSaved: false,
    },
    {
        id: 12,
        name: "한옥집",
        image: korean,
        star: 4.7,
        category: "한식",
        location: "종로",
        isSaved: false,
    },
    {
        id: 13,
        name: "더 브런치 카페",
        image: brunch,
        star: 4.5,
        category: "브런치",
        location: "강남",
        isSaved: false,
    },
    {
        id: 14,
        name: "정통 프렌치 레스토랑",
        image: french,
        star: 4.8,
        category: "프렌치",
        location: "이태원",
        isSaved: true,
    },
    {
        id: 100,
        name: "오마카세 한우",
        image: hanwoo,
        star: 4.9,
        category: "한우 오마카세",
        location: "청담",
        isSaved: true,
    },
    {
        id: 101,
        name: "이탈리안 다이닝",
        image: italian,
        star: 4.6,
        category: "이탈리안",
        location: "홍대",
        isSaved: false,
    },
    {
        id: 102,
        name: "도쿄 스시",
        image: japaneseFood,
        star: 4.3,
        category: "일식",
        location: "서초",
        isSaved: false,
    },
    {
        id: 103,
        name: "파스타 하우스",
        image: pasta,
        star: 4.5,
        category: "파스타",
        location: "분당",
        isSaved: false,
    },
    {
        id: 105,
        name: "스테이크 전문점",
        image: steak,
        star: 4.7,
        category: "스테이크",
        location: "여의도",
        isSaved: false,
    },
    {
        id: 106,
        name: "고급 와인바",
        image: wine,
        star: 4.9,
        category: "와인바",
        location: "강남",
        isSaved: true,
    },
    {
        id: 110,
        name: "정통 일식 요리",
        image: realJapanese,
        star: 4.6,
        category: "일식",
        location: "명동",
        isSaved: true,
    },
    {
        id: 111,
        name: "소고기 구이 전문점",
        image: beef,
        star: 4.5,
        category: "소고기 구이",
        location: "성수",
        isSaved: false,
    }
];

export default RecommendedList;
