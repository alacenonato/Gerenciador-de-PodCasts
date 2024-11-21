import { IncomingMessage, ServerResponse } from 'http';

import {serviceListEpisodes} from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service';

export const getListEpisodes = async (resquest: IncomingMessage, response: ServerResponse) => {
    
    const content = await serviceListEpisodes();

    response.writeHead(200, { 'content-type': "application/json" });
    response.end(JSON.stringify(content));

};

export const getFilterEpisodes = async (resquest: IncomingMessage, response: ServerResponse) => {

    const content = await serviceFilterEpisodes('flow');
    response.writeHead(200, {'content-type': "application/json"});
    response.end(JSON.stringify(content));
    
}
