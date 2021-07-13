// import React from 'react'




//   function Hello(){

    

//   return(

//     <div>

//       <h2>Hello </h2>

//   </div>

//   )      
//   }

//   export default Hello;



import React, {useState} from 'react'


const Hello = props => {


  const [useSetName, useSetMethod] = useState({


    fruits : [

      {name: 'Mango', weight:'20gm'},
      {name: 'apple', weight:'10gm'},
      {name: 'orang', weight:'30gm'},
      {name: 'banana', weight:'40gm'}

    ]




  });

  const ClickHandler = () =>{

    useSetMethod({

      fruits:[

        {name: 'shibu', weight:'202gm'},
        {name: 'ahsan', weight:'101gm'},
        {name: 'huq', weight:'303gm'},
        {name: 'banana', weight:'40gm'}
       
      ]
    })

  }


  return(

    <div>

         <h1>My name is {useSetName.fruits[0].name} and my weight is {useSetName.fruits[0].weight} </h1>
         <h1>My name is {useSetName.fruits[1].name} and my weight is {useSetName.fruits[1].weight} </h1>
         <h1>My name is {useSetName.fruits[2].name} and my weight is {useSetName.fruits[2].weight} </h1>
         <h1>My name is {useSetName.fruits[3].name} and my weight is {useSetName.fruits[3].weight} </h1>

         <button onClick={ClickHandler}>Change me</button>
       
    </div>
  )

}

export default Hello;