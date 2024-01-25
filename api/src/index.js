// Fastify es una librería para escribir api rest
import Fastify from 'fastify'

// Inicializando la constante fastify
const fastify = Fastify({
    logger: true
})

// Definimos el metodo read de la "/"
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

// TODO: Crear los métodos para completar el CRUD

// Escucha y ejecuta la aplicación
fastify.listen({ port: 3000 })
