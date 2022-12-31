import {
    atom, selector,
  } from 'recoil';

export const DetailInformation = atom({
    key : 'list/detailinformation',
    default : []
});

export const informationCount = atom({
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
    default: 2015,
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
    
        let markerlist =  list.map((data, i)=>{
            return{
                name: nameList[i],
                isMouseover: false,
                location: location[i],
            }
        })

        return markerlist;

    }
})