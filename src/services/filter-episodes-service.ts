import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-tranfer-model";
import { StatusCode } from "../utils/status.code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
    ):Promise<PodcastTransferModel> => {

    // define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    // buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat = {
        statusCode : data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;

}
