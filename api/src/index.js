console.log('Hola Node')

import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

const tareas = [
    "tarea1",
    "tarea2",
    "tarea3"
];

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.get('/tareas', function (request, reply) {
    reply.send({ 'tareas': tareas })
})


fastify.listen({ port: 3000 })