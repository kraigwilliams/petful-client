import config from '../config'

const peopleService={

getPeople(){
  return fetch(`${config.API_ENDPOINT}/people`, {
      
      })
      .then(res=>res.json())
}

}

export default peopleService