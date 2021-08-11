import express from 'express'
import { Server as socketio } from 'socket.io'
import * as http from 'http'; //ES 6
import router from './router.js'
import cors from 'cors'
import { addUser, getCurrentUser, removeUser, getRoomUsers } from './utils/users.js'

const app = express()

const server = http.createServer(app)

const corsOptions = {
    cors: true,
    origins: ["*"],
}

app.use(cors())
app.use(router)

const io = new socketio(server, corsOptions)
const botName = 'ChatBot'
io.on("connect", (socket) => {

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room })
        if (error) return callback(error)
        socket.join(user.room)
        socket.emit('message', { user: botName, text: `${user.name}, welcome to ${user.room} chatroom!` })
        socket.broadcast.to(user.room).emit('message', { user: botName, text: `${user.name}, has joind ${user.room} chatroom!` })

        io.to(user.room).emit('roomData', { room: user.room, users: getRoomUsers(user.room) })

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getCurrentUser(socket.id)
        io.to(user.room).emit('message', { user: user.name, text: message })

        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if (user) {
            io.to(user.room).emit('message', { user: botName, text: `${user.name} has left!` })
            io.to(user.room).emit('roomData', { room: user.room, users: getRoomUsers(user.room) })
        }
    })

});



const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})