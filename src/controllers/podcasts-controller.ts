import {IncomingMessage, ServerResponse} from 'http';

export const getListEpisodes = async (resquest: IncomingMessage, response: ServerResponse)=> {
    response.writeHead(200, {'content-type': "application/json"});
    response.end({
        name:"Felipe"
    });

}

