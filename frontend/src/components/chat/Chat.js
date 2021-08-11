import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../infobar/InfoBar'
import Input from '../input/Input'
import Messages from '../messages/Messages'
import TextContainer from '../textcontainer/TextContainer'
import './chat.css'

let socket
const endPoint = 'https://chat-with-react-app.herokuapp.com/'

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState('')

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        socket = io(endPoint)
        setName(name)
        setRoom(room)
        socket.emit('join', { name, room }, (error) => {
            if (error) {

            }
        })

    }, [location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })


    }, [messages])

    //Send messages to server
    const sendMessage = (e) => {
        e.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages)
    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    )
}

export default Chat
