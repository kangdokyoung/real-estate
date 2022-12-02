import {
    atom,
  } from 'recoil';

export const buildingList = atom({
key : 'list/buildingList',
default : [
    {
        name: 'a',
        count: 3,
        rise: 26,
        price: 3.05,
    },
    {
        name: 'b',
        count: 2,
        rise: 12,
        price: 3.15,
    },
    {
        name: 'c',
        count: 1,
        rise: 17,
        price: 3.25,
    },
    {
        name: 'a',
        count: 3,
        rise: 26,
        price: 3.05,
    },
    {
        name: 'b',
        count: 2,
        rise: 12,
        price: 3.15,
    },
    {
        name: 'c',
        count: 1,
        rise: 17,
        price: 3.25,
    },
    {
        name: 'a',
        count: 3,
        rise: 26,
        price: 3.05,
    },
    {
        name: 'b',
        count: 2,
        rise: 12,
        price: 3.15,
    },
    {
        name: 'c',
        count: 1,
        rise: 17,
        price: 3.25,
    },
]
});

// 아톰 두개 통일, id값 추가 -> 지금은 더미 데이터라 그냥 두고 나중에 백 붙일 때 하나로 통일하는 걸로 바꿀 예정
export const DetailInformation = atom({
    key : 'list/detailinformation',
    default : 
        {
            name: 'o',
            count: 0,
            rise: 0,
            price: 3.05,
            adress:'abc',
            place: 'ㅇㅇ구',
            contract: 11.23,
            barea: 1,
            larea: 2,
            floor: 3,
            build: 11.23,
            for: '아파트',
            regist: 11.23,
        }
});

export const converse = atom({
    key: 'list/conversion',
    default: 0
});

export const selectedBuilding = atom({
    key: 'list/selectedbuilding',
    default: ''
})