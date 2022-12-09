import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/tasks')
}

export function getAllTasksfromList (id) {
  return api.get('/tasks/list/' + id)
}

export function updateBoolTask (id, boolean) {
  return api.put('/tasks/' + id, {
    done: boolean
  })
}

export function createTask (titleTask, idList, descriptionTask = '') {
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
  console.log(jsonWithParams)

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
