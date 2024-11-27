import axios from "axios"
import { MoviePage, PageInfo } from "../models/MoviePage";

export const getMoviePage = (pageNo: number): Promise<PageInfo> => {
    return axios.get<MoviePage>(`https://test.create.diagnal.com/data/page${pageNo}.json`).then((response) => {
        return response.data.page
    })
}