import React, {Component} from 'react';
import './Counter.css'
class Counter extends Component{
	constructor(){
		super();//Error if super method is not called
		//this is a state javascript object with variable counter given to 0
		this.state={
			counter:0
			//secondcounter:100
		}
		this.increment=this.increment.bind(this);
		this.decrement=this.decrement.bind(this);
		this.reset=this.reset.bind(this);
		//binding the function in the constructor 
		//making this available in the function increment
		//not needed if the increment function is defined
		// using an arrow function  

 
	}

	render(){
	  return (
	  	<div className="counter">
	  	<CounterButton by={1} incrementMethod={this.increment}
	  	 decrementMethod={this.decrement}/>
	  	<CounterButton by={5} incrementMethod={this.increment}
	  	 decrementMethod={this.decrement}/>
	 	<CounterButton by={10} incrementMethod={this.increment}
	 	 decrementMethod={this.decrement}/>
	  	
	  	<span className="count">{this.state.counter}</span>
	  	<div className="reset"><button  className ="Reset" onClick={this.reset}>Reset</button></div>
	  	</div>
	    
	  );
	}
	reset(){
		this.setState({
			counter:0
		})
	}
	increment(by){
	//increment=()=>{
		//update the state in the increment method
		//console.log("Increment");
		//this.state.counter++;
		//Instead of directly mutating the state object use setState()
		this.setState({
			counter:this.state.counter+by
			//secondcounter:this.state.secondcounter+1
		}); 
	
	}
	decrement(by){
		this.setState({
			counter: this.state.counter-by
		})
	}
}

class CounterButton extends Component{
	//1.define the initial state in a constructor 
	//initially the state would be set to zero 
	constructor(){
		super();//Error if super method is not called
		//this is a state javascript object with variable counter given to 0
		//this.state={
		//	counter:0
			//secondcounter:100
		//}
		this.increment=this.increment.bind(this);
		this.decrement=this.decrement.bind(this);
		//binding the function in the constructor 
		//making this available in the function increment
		//not needed if the increment function is defined
		// using an arrow function  

 
	}


	render(){
	return (
		<div className ="counterButton">
		<button  onClick={this.increment}>+{this.props.by}</button>
		<button onClick={this.decrement}>-{this.props.by}</button>
		</div>
		);
	}
	increment(){
	//increment=()=>{
		//update the state in the increment method
		//console.log("Increment in counter button ");
		//this.state.counter++;
		//Instead of directly mutating the state object use setState()
		//this.setState({
		//	counter:this.state.counter+this.props.by
			//secondcounter:this.state.secondcounter+1
		//});

		/*calling the parent method from child method with the argument by */
		this.props.incrementMethod(this.props.by);
	
	}
	decrement(){
		this.props.decrementMethod(this.props.by);
	}
	
}

export default Counter;