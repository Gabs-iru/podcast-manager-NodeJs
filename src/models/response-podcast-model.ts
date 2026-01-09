import { podcastModel } from "./podcast_model";

export interface filterPodcastModel{
    statusCode: number,
    body: podcastModel[]
}