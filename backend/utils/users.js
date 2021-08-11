const users = []

// Add user when they join
const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase()
    //room = room.trim().toLowerCase()
    // check if user name exists
    const existingUser = users.find((user) => user.room === room && user.name === name)

    if (existingUser) {
        return { error: 'Username is taken' }
    }
    const user = { id, name, room }
    users.push(user);
    return { user };
}

// Get current user
const getCurrentUser = (id) => {
    return users.find(user => user.id === id);
}

// Remove user
const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
const getRoomUsers = (room) => {
    return users.filter(user => user.room === room)
}


export { addUser, getCurrentUser, removeUser, getRoomUsers }