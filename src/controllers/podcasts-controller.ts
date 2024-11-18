import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async (resquest: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, { 'content-type': "application/json" });
    response.end(JSON.stringify({
        podcastName: "flow",
        episode: "MILTON NEVES - Flow #412",
        videoId:"NE5aUYsswVQ",
        categories: ["saúde", "bodybuilder"],
        
    }));

};

