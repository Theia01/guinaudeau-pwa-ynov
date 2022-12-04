import { api } from 'boot/axios'

export function getAllLists () {
  return api.get('/lists')
}

export function getList (id) {
  return api.get('/lists/' + id)
}

export function createList (titleList) {
  return api.post('/lists', {
    title: titleList
  }).then((response) => {
    return true
  }, (error) => {
    console.log(error)
    return false
  })
}

export function deleteList (id) {
  return api.delete('/lists/' + id)
    .then((response) => {
      return true
    }, (error) => {
      console.log(error)
      return false
    })
}
