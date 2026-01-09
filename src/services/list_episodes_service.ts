import { filterPodcastModel } from "../models/response-podcast-model"
import { repoPodcast } from "../repositories/podcasts_repository"
import { HttpStatus } from "../utils/http_status_code"


export const serviceListEpisodes = async (): Promise<filterPodcastModel> =>{
    let responseFormat: filterPodcastModel = {
            statusCode: 0,
            body:[]
        }

    
    const data = await repoPodcast()

    responseFormat = {
          statusCode: data.length !== 0 ? HttpStatus.OK : HttpStatus.noContent,
          body:data
    }
    
    return responseFormat
}