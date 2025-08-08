// 샘플 데이터

import './main.css';
import Filter from './components/Filter';
import CardList from './components/CardList';
import { useState } from 'react';

const DATA = [
    {
        id: 1,
        title: '소노 카드 1',
        description: '증상: 언성 높임\n빈도: 하루 1, 2회\n대처법: 안마, 먹을 것',
        category: '소노 🔥',
        image: '/images/angry-small1.jpg',
    },
    {
        id: 2,
        title: '중노 카드 1',
        description: '증상: 고함\n빈도: 한달에 1, 2회\n대처법: 5만원 이상의 용돈, 선물',
        category: '중노 🔥🔥',
        image: '/images/angry-mid1.jpg',
    },
    {
        id: 3,
        title: '소노 카드 2',
        description: '증상: 언성 높임\n빈도: 하루 1, 2회\n대처법: 안마, 먹을 것',
        category: '소노 🔥',
        image: '/images/angry-small2.jpg',
    },
    {
        id: 4,
        title: '대노 카드 1',
        description: '증상: 물건을 집어던짐\n빈도: 일년에 5, 6회\n대처법: 십만원 이상의 용돈, 큰 선물',
        category: '대노 🔥🔥🔥',
        image: '/images/angry-big1.jpg',
    },
    {
        id: 5,
        title: '중노 카드 2',
        description: '증상: 고함\n빈도: 한달에 1, 2회\n대처법: 5만원 이상의 용돈, 선물',
        category: '중노 🔥🔥',
        image: '/images/angry-mid2.jpg',
    },
    {
        id: 6,
        title: '소노 카드 3',
        description: '증상: 언성 높임\n빈도: 하루 1, 2회\n대처법: 안마, 먹을 것',
        category: '소노 🔥',
        image: '/images/angry-small3.jpg',
    },
];
const CATEGORIES = ['전체', ...new Set(DATA.map((item) => item.category))];

export default function Home() {
    const [filterCategory, setFilterCategory] = useState('전체');

    const filteredData = filterCategory === '전체' ? DATA : DATA.filter((item) => item.category === filterCategory);

    return (
        <main className="container">
            <h1>노구의 분노 3단계</h1>
            <Filter categories={CATEGORIES} currentFilter={filterCategory} onFilterChange={setFilterCategory} />
            <CardList data={filteredData} />
        </main>
    );
}
