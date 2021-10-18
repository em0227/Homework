import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = { result: 0, num1: "", num2: ""};
    this.setNum1 = this.setNum1.bind(this);
    //could also use arrow function so no need to bind
    this.setNum2 = this.setNum2.bind(this);
    this.conductMath = this.conductMath.bind(this);
  }

  //your code here
  setNum1(event){
    event.preventDefault();
    // debugger
    if (event.target.value === "") alert("error");
    const newNum = event.target.value
    return this.setState({num1: parseInt(newNum)});
  }

  setNum2(event) {
    event.preventDefault();
    if (event.target.value === "") alert("error");
    const newNum = event.target.value;
    return this.setState({ num2: parseInt(newNum) });
  }

  conductMath(event) {
    event.preventDefault();
    // debugger
    let newResult
    switch (event.target.innerHTML) {
      case '+':
        newResult = this.state.num1 + this.state.num2;
        this.setState({result: newResult});
        break;
      case '-':
        newResult = this.state.num1 - this.state.num2;
        this.setState({ result: newResult });
        break;
      case '*':
        newResult = this.state.num1 * this.state.num2;
        this.setState({ result: newResult });
        break;
      case '/':
        newResult = this.state.num1 / this.state.num2;
        this.setState({ result: newResult });
        break;
    }
  }

  render(){
    const operations = [
      "+", "-", "*", "/"
    ];

    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} />
        <input onChange={this.setNum2} />
        <button>Clear</button>
        <div>
          {operations.map(operation => 
              <button key={operation} onClick={this.conductMath}>{operation}</button>
          )}
        </div>
       
      </div>
    );
  }
}

export default Calculator;
