import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list_episodes_service";
import { filterEpisodes } from "../services/filter_episodes_service";
import { filterPodcastModel } from "../models/response-podcast-model";






export const getListEpisodes = async (req:IncomingMessage, res:ServerResponse) => {
    const content: filterPodcastModel = await serviceListEpisodes()
    
    res.writeHead(content.statusCode, {'content-type': "application/json"})
    res.write(JSON.stringify(content.body))

    res.end()
}

export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse) =>{

    
    const content: filterPodcastModel = await filterEpisodes(req.url)
    
    res.writeHead(content.statusCode, {'content-type': "application/json"})
    res.end(JSON.stringify(content.body))
}