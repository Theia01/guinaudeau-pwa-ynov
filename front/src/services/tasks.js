import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/tasks')
}

export function getAllTasksfromList (id) {
  return api.get('/tasks/list/' + id)
}
