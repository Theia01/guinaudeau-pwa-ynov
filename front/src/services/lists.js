import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/lists')
}
