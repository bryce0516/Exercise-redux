import React , {useEffect, useState} from 'react'



interface Props {

}

const GetFetch = () => {
  const [state, setState] = useState<string[]>()

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const arr:string[] = []
        json.forEach((element: any) => {
          if (element.userId === 1){
            arr.push(JSON.stringify(element.title))
          }
        })
        setState(arr)
      })
  },[])

  return (  
    <div>
      {state?.map((item, index) => (
        <p key={index}>{item}</p>
      )
      )}
    </div>
  )
}
 
export default GetFetch;