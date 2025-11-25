import axiosInstance from "./axiosInstance"

export default function createCard(  cardName: string,listId: number){
    console.log("createCard api", {  cardName,listId })
    return axiosInstance.post('/cards', {  cardName:cardName,listId :listId})
}
export function updateCardApi(cardId: number, data: any) {
    return axiosInstance.patch(`/cards/${cardId}`, data)

}


export function deleteCardApi(cardId: number) {
    return axiosInstance.delete(`/project/${cardId}`)

}

