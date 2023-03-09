import {
    atom, selector,
  } from 'recoil';

export type Data = {
    id : number,
    x: number,
    y: number,
    건물면적: number,
    건물명: string,
    건물용도: string,
    건축년도: number,
    계약일: number,
    도로명주소: string,
    물건금액: number,
    법정동명: string,
    법정동코드: number,
    본번: number,
    부번: number,
    자치구명: string,
    자치구코드: number,
    접수연도: number,
    층: number,
    토지면적: string,
}[]

type Count = {
    'COUNT(*)': number,
    id: number,
    건물명: string,
}[]

export const DetailInformation = atom<Data>({
    key : 'list/detailinformation',
    default : []
});

export const informationCount = atom<Count>({
    key: 'map/informationCount',
    default: [],
})

export const converse = atom({
    key: 'list/conversion',
    default: 0
});

export const selectedBuilding = atom({
    key: 'list/selectedbuilding',
    default: 0
})

export const selectedYear = atom({
    key: 'map/selectedyear',
    default: '2015',
})

export const dataSort = atom({
    key: 'list/dataSort',
    default: '',
})


export const filteredInformation = selector({
    key: 'filteredInformation',
    get: ({get})=>{
        const list = get(DetailInformation);

        let nameList = list.map((data, i) =>{
            const nameData = data.건물명
            return nameData;
        })
    
        let location = list.map((data, i)=>{
            const locData = {lng: data.y, lat: data.x};
            return locData;
        })
        let id = list.map((data, i)=>{
            const idData = data.id
            return idData;
        })
    
        let markerlist =  list.map((data, i)=>{
            return{
                name: nameList[i],
                location: location[i],
                id: id[i],
            }
        })

        return markerlist;

    }
})

export const markerOverlay = atom<number>({
    key: 'maps/markeroverlay',
    default: 0,
})