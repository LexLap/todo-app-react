import Axios from "axios";

const url = 'http://localhost:4000'

export const createTask = async (data) =>{
    try {
        const result = await Axios.put(url+'/create-new-task', {
            content: data
        })

        return result.data
    } catch (error){
        if (error.response && error.response.status === 500) {
            console.log(error.response.data.message.message)
            alert(error.response.data.message.message)
        }else alert('Unable to create task.\nNo connection with the server!')
        return undefined
    }
}

export const getTasks = async () =>{
    try {
        const result = await Axios.get(url+'/get-tasks')
        return result.data
    } catch (error){
        if (error.response && error.response.status === 500) {
            console.log(error.response.data.message.message)
            alert(error.response.data.message.message)
        }else alert('Unable to get tasks.\nNo connection with the server!')
        return []
    }
}

export const deleteTask = async (taskID) =>{
    try {
        await Axios.delete(url+'/delete-task', {
            data: {id: taskID}
        })

        return true
    } catch (error){
        if (error.response && error.response.status === 500) {
            console.log(error.response.data.message.message)
            alert(error.response.data.message.message)
        }else alert('Unable to delete task.\nNo connection with the server!')
        return false
    }
}

export const updateTask = async (taskID) =>{
    try {
        await Axios.patch(url+'/update-task', {
            id: taskID
        })

        return true
    } catch (error){
        if (error.response && error.response.status === 500) {
            console.log(error.response.data.message.message)
            alert(error.response.data.message.message)
        }else alert('Unable to update task.\nNo connection with the server!')
        return false
    }
}

export const countActiveTasks = (tasksData) =>{
    if(tasksData){
        let activesCounter = 0
        tasksData.forEach(element => {
            if(!element.statusIsCompleted) activesCounter++ 
        })
        return activesCounter
    }else return 0
}

export const removeTaskLocally = (tasksData, taskID) =>{
    const newArray = []

    tasksData.forEach(element => {
        if(element._id !== taskID) newArray.push(element) 
    })
    return newArray
}

export const updateTaskLocally = (tasksData, taskID) =>{
    const newArray = []

    tasksData.forEach(element => {
        if(element._id === taskID) element.statusIsCompleted = !element.statusIsCompleted
        newArray.push(element) 
    })
    return newArray
}