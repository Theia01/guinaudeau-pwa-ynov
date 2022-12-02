import { api } from 'boot/axios'

export function getAllLists () {
  return api.get('/lists')
}

export function createList (titleList) {
  return api.post('/lists', {
    title: titleList
  }).then((response) => {
    console.log(response)
  }, (error) => {
    console.log(error)
  })
}
