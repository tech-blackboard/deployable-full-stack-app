import { List } from "lucide-react"
import axiosInstance from "./axiosInstance"

export default function createCard(cardName: string,listId: number){
    console.log("createCard api", { cardName,listId })
    return axiosInstance.post('/cards', { cardName,listId :listId})
}
export function updateCardApi(cardId: number, data: any) {
    return axiosInstance.patch(`/cards/${cardId}`, data)

}


export function deleteCardApi(cardId: number) {
    console.log("deleted cardId", {cardId})
    return axiosInstance.delete(`/cards/${cardId}`)

}
export function updateCardListApi(cardId: number, newListId: number) {
    return axiosInstance.patch(`/cards/${cardId}`, { listId: newListId });
}


