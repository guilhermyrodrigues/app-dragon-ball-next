import { Planets, Root } from "@/model/planets"
import axios from "axios"

const API_URL = 'https://dragonball-api.com/api'

export const fetchPlanetsList = async (offset = 0, limit = 1000): Promise<Planets[]> => {
    const response = await axios.get(`${API_URL}/planets?offset=${offset}&limit=${limit}`)
    const data: Root = await response.data
    return data.items
}