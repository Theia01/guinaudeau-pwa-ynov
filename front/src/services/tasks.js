import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/tasks')
}

export function getAllTasksfromList (idList) {
  return api.get('/tasks/list/' + idList)
}

export function getOneTasks (idTask) {
  return api.get('/tasks/' + idTask)
}

export function updateBoolTask (id, boolean) {
  return api.put('/tasks/' + id, {
    done: boolean
  })
}

export function updateTask (id, titleTask, descriptionTask) {
  if (descriptionTask === '') {
    descriptionTask = ' '
  }
  return api.put('/tasks/' + id, {
    title: titleTask,
    description: descriptionTask
  })
}

export function createTask (idList, titleTask, descriptionTask = '') {
  let jsonWithParams = []
  if (descriptionTask !== '' && descriptionTask !== undefined) {
    jsonWithParams = {
      title: titleTask,
      list: idList,
      description: descriptionTask
    }
  } else {
    jsonWithParams = {
      title: titleTask,
      list: idList
    }
  }

  return api.post('/tasks', jsonWithParams).then((response) => {
    console.log(response)
    return true
  }, (error) => {
    console.log(error)
    return false
  })
}

export function deleteTask (id) {
  return api.delete('/tasks/' + id)
    .then((response) => {
      return true
    }, (error) => {
      console.log(error)
      return false
    })
}
