import { PodcastModel } from "./podcast-models";

export interface FilterPodCastModel {
    statusCode: number;
    body: PodcastModel[];
}