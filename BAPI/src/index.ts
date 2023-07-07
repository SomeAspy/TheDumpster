import Fastify from 'fastify';

const server = Fastify();

server.route({
    method: 'GET',
    url: '/',
    schema: {
        querystring: {
            user: { type: 'string' },
        },
    },
    handler: async (request, reply) => {
        console.log(request.query);
        return { hello: request.query };
    },
});

const init = async () => {
    try {
        await server.listen({ port: 3000 });
    } catch (err) {
        server.log.error(err);
    }
};

init();
