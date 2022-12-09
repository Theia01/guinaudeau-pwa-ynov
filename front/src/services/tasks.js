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
  }).then((response) => {
    return true
  }, (error) => {
    console.log(error)
    return false
  })
}
