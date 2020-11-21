import React, { Component } from 'react';

import './App.css';
//import FirstComponent,{SecondComponent} from './FirstComponent';
import Counter from './Counter';
class App extends Component{
	render(){
		return(
			<div className="App">
			<div className="header"><h1>Counter App</h1></div> 
			<Counter/>

			<h4> Created by- Saikat Chakraborty  (JU ETCE)</h4>
			</div>

			);
	}
	
	
}
//by is a component property 

/*


//class Component
class LearningComponents extends Component{
	render (){
		return (
			<div className="LearningComponents">
	      Hello World!
	      <FirstComponent></FirstComponent>
	      <SecondComponent/>
	      <ThirdComponent/>
	    </div>


			); 
	}
}





//Creating a component as a function 
//A class component has something called a state additional to function
//component  
function ThirdComponent(){
	return (
		<div className="ThirdComponent">
			My name is Saikat and this is my first react app ThirdComponent
			</div>
	);

	
}
*/

export default App;
