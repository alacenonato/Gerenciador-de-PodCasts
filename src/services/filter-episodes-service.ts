import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { FilterPodCastModel } from "../models/filter-podcast-models";
import { StatusCode } from "../utils/status.code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
    ):Promise<FilterPodCastModel> => {

    // define a interface de retorno
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    }

    // buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    // com if ternario 
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    // verifica se tem conteúdo
    // if (data.length !== 0) {
    //     responseFormat.statusCode = StatusCode.OK;
    // } else {
    //     responseFormat.statusCode = StatusCode.NO_CONTENT;
    // }

    responseFormat.body = data;
    return responseFormat;

}
