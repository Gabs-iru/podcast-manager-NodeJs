import { IncomingMessage } from "http"
import { repoPodcast } from "../repositories/podcasts_repository"
import { filterPodcastModel } from "../models/response-podcast-model"
import { HttpStatus } from "../utils/http_status_code"



export const filterEpisodes = async (podcastName: string | undefined): Promise<filterPodcastModel> =>{

    let responseFormat: filterPodcastModel = {
        statusCode: 0,
        body:[]
    }

    const stringQuery = podcastName?.split("?v=")[1] || " "
    const data = await repoPodcast(stringQuery)

    responseFormat = {
          statusCode: data.length !== 0 ? HttpStatus.OK : HttpStatus.noContent,
          body:data
    }

    return responseFormat
}