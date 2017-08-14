import React, {Component} from 'react';
import './HelloWorld.css';



class HelloWorld extends Component{
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    //this.frenchfy = this.frenchify.bind(this);
    this.frenchify = this.frenchify.bind(this);
  }
  render(){
    return (<div className="HelloWorld">
    {this.state.greeting}{this.props.name}!
    <br/>
    <button onClick={this.frenchify}>Frenchify!</button>
    </div>
    );
  }
  frenchify(){
    this.setState({greeting:'Bonjour'});
  }
}
//const HelloWorld = (props) => {
  //return (<div className="HelloWorld">Hello {props.name}!</div>);
//};
export default HelloWorld;
//this.frenchfy=this.frenchify.bind(this);//Specify the meaning of this
