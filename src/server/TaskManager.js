import Axios from "axios";

const url = 'http://localhost:4000'

export const createTask = async (data) =>{
    try {
        const result = await Axios.put(url+'/create-new-task', {
            content: data
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export const getTasks = async () =>{
    try {
        const result = await Axios.get(url+'/get-tasks')
        console.log(result)
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = async (taskID) =>{
    try {
        console.log(taskID)
        const result = await Axios.delete(url+'/delete-task', {
            data: {id: taskID}
        })
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
}

export const updateTask = async (taskID) =>{
    try {
        console.log(taskID)
        const result = await Axios.patch(url+'/update-task', {
            id: taskID
        })
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
}

export const countActiveTasks = (tasksData) =>{

    let activesCounter = 0
    tasksData.forEach(element => {
        if(!element.statusIsCompleted) activesCounter++ 
    });
    return activesCounter
}