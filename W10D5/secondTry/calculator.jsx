import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = { result: 0, num1: [], num2: []};
    this.setNum1 = this.setNum1.bind(this);
    //could also use arrow function so no need to bind
    this.setNum2 = this.setNum2.bind(this);
  }

  //your code here
  setNum1(event){
    event.preventDefault();
    if (this.num1 === []) alert("error");
    return parseInt(this.num1[0])
  }

  setNum2(event) {
    event.preventDefault();
    if (this.num2 === []) alert("error");
    return parseInt(this.num1[0])
  }

  conductMath(event) {
    event.preventDefault();

  }

  render(){
    const math = [
      "+", "-", "*", "/"
    ];

    return (
      <div>
        <h1>{this.state.result}</h1>
        <input OnChange={this.setNum1} value={this.state.num1[0]} />
        <input OnChange={this.setNum2} value={this.state.num2[0]} />
        <ul>
          <li key={math} OnClick={this.conductMath}>{math}</li>
        </ul>
       
      </div>
    );
  }
}

export default Calculator;
