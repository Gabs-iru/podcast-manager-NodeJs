
import * as http from "http";

import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http_method";




export const app = async (req:http.IncomingMessage, res:http.ServerResponse) =>{


    //queryString
    const baseUrl = req.url?.split("?")[0]

    if(req.method === HttpMethods.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res)
    }

    if(req.method === HttpMethods.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res)
    }

}