import { Characters, Root } from "@/model/characters"
import axios from "axios"

const API_URL = 'https://dragonball-api.com/api'

export const fetchCharactersList = async (offset = 0, limit = 1000): Promise<Characters[]> => {
    const response = await axios.get(`${API_URL}/characters?offset=${offset}&limit=${limit}`)
    const data: Root = await response.data
    return data.items
}