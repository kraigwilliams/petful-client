import config from '../config'

const petService={

getDogs(){
 return   fetch(`${config.API_ENDPOINT}/dog`, {
        
      })
      .then(res=>res.json())
},
getCats(){
  return   fetch(`${config.API_ENDPOINT}/cat`, {
        
  })
  .then(res=>res.json())
}

}

export default petService