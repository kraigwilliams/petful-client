import config from '../config'

const peopleService={

getPeople(){
  return fetch(`${config.API_ENDPOINT}/people`, {
      
      })
      .then(res=>res.json())
},


postUser(newPerson){
  return fetch(`${config.API_ENDPOINT}/people`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
      
    },
    body: JSON.stringify({
      newPerson
    })
  })




}
}

export default peopleService