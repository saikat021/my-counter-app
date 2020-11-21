//class component 
import React, {Component} from 'react';
export default class FirstComponent extends Component{
	render(){
  return (
    <div className="FirstComponent">
      FirstComponent from another module 
    </div>

  );
}

}
export class SecondComponent extends Component{
	render(){
  return (
    <div className="SecondComponent">
      SecondComponent from another module 
    </div>

  );
}

}