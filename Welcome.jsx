import React, {Component} from 'react'



class Welcome extends Component{

  constructor(){

    super();
    

    this.state = {

      fruits :[

        {name: 'Mango', weight:'20gm'},
        {name: 'apple', weight:'10gm'},
        {name: 'orang', weight:'30gm'},
        {name: 'banana', weight:'40gm'}
      ]
    }
   
  
  }

  clickHandler = () =>{


    this.setState({


      fruits : [

        {name: 'shibu', weight:'202gm'},
        {name: 'ahsan', weight:'101gm'},
        {name: 'huq', weight:'303gm'},
        {name: 'banana', weight:'40gm'}
      ]

    })

  }

 
  render(){


    return(

      <div>

   
  

      <h1>Fruits name is {this.state.fruits[0].name} and weight is {this.state.fruits[0].weight}</h1>
      <h1>Fruits name is {this.state.fruits[1].name } and weight is {this.state.fruits[1].weight}</h1>
      <h1>Fruits name is {this.state.fruits[2].name} and weight is {this.state.fruits[2].weight}</h1>
      <h1>Fruits name is {this.state.fruits[3].name} and weight is {this.state.fruits[3].weight}</h1>

     <button onClick={this.clickHandler}>Click Me</button>
    
          

      </div>
    )
  }

}

export default Welcome;

