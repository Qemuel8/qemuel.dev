import React, { Component } from 'react';
import './calculator.css'

class Calculator extends Component {
constructor(props){
    super(props)
    this.state = { 
        input: "0",
        displayData: "0",

        buttons: {

            numbers: [

                {
                    id: "one",
                    display: '1',
                },
                {
                    id: "two",
                    display: '2',
                },
                {
                    id: "three",
                    display: '3',
                },
                {
                    id: "four",
                    display: '4',
                },
                {
                    id: "five",
                    display: '5',
                },
                {
                    id: "six",
                    display: '6',
                },
                {
                    id: "seven",
                    display: '7',
                },
                {
                    id: "eight",
                    display: '8',
                },
                {
                    id: "nine",
                    display: '9',
                },
                {
                    id: "zero",
                    display: '0',
                },],
            operands: [
                {
                    id: 'equals',
                    display: '=',
                    },
                
                {
                    id: "add",
                    display: '+',
                },
                {
                    id: "subtract",
                    display: '-',
                },
                {
                    id: "multiply",
                    display: 'x',
                },
                {
                    id: "divide",
                    display: '/',
                },

            ],
            other:[
                            { 
                id: "decimal",
                display: '.',
                },
                {
                    id: "clear",
                    display: 'AC',
                },
            ]
        }
     } 
}

handleInput = (input ) =>{
    //console.log('my input is '+ input)
    switch (input){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        if(this.state.displayData == '0'){
            this.setState((state) =>({
                displayData: ""
            }))
        }
            this.setState((state) =>({
            displayData: state.displayData + input
        }))
        break;
        case '+':
        case '-':
        case '/':
        case 'x':
            if(["x", '+', "/", "-"].includes(this.state.displayData[this.state.displayData.length-1])){
                if(input == '-'){
                    this.setState((state) =>({

                        displayData: state.displayData + input
    
                    }))
                }else(
                                    this.setState((state) =>({

                    displayData: state.displayData.slice(0,-1) + input

                }))
                )

            }
            else{
                this.setState((state) =>({
                    displayData: state.displayData + input

                }))
            }
            break;
        case 'AC':
            this.setState((state) =>({
                displayData: "0"
            })) 
            break;
            case ".":
            if(/\.$/.test(this.state.displayData)){
                break;
            }
            else if(/^.*\.\d*[\+\-\/x]*$/gi.test(this.state.displayData)){
                break;
            }else if(/[\+\-\/x]$/gi.test(this.state.displayData)){
                this.setState((state) =>({
                    displayData: state.displayData + "0" + input
                    }))
            }
            else{
                this.setState((state) =>({
                    displayData: state.displayData + input
                    }))
            }
            break;

            case "=":
            this.calculate();
            break;
    }
    
}

calculate = () => {
    let operands = this.state.displayData.split(/[\+\-\/x]/);
    let operators = this.state.displayData.split(/\d+/);
    operators = operators.filter((item) =>{
        return item != null && item != '' && item != '.';
    });
    operands = operands.filter((item) =>{
        return item != null && item != '';
    });
    let result = 0;
    console.log("my operands" + operands);
    console.log("my operators: " + operators);
    result = operands.splice(0,1);
    let length = operands.length;
    for(let i = 0; i <= length; i++) {
        if(operators[0] == '+' || operators[0] == '+-' ){
            if(operators[0] == '+-' ){
                operators.shift();
                operators.unshift("+");
                operands[1] = -parseFloat(operands[0]);
                result = parseFloat(result) + -parseFloat(operands.splice(0,1));
                operators.shift();
                continue;
            }

           //console.log("negative check" + parseFloat(operands.splice(0,1)))
            result = parseFloat(result) + parseFloat(operands.splice(0,1));
            console.log("my operands: " + operands + " my operators: " + operators + 'my current result: ' + result + "iteration: " + i );
            operators.shift();

        }else if( operators[0] == "-" ||operators[0] == '--' ){
            if(operators[0] == '--' ){
                operators.shift();
                operators.unshift("-");
                operands[1] = -parseFloat(operands[0]);
                result = parseFloat(result) - -parseFloat(operands.splice(0,1));
                operators.shift();
                continue;
            }
            operators.shift();
            result = parseFloat(result) - parseFloat(operands.splice(0,1));
            console.log("my operands" + operands + "my operators: " + operators + 'my current result: ' + result + "iteration: " + i );
        }else if(operators[0] == "x" ||operators[0] == 'x-'){
            if(operators[0] == 'x-' ){
                operators.shift();
                operators.unshift("x");
                operands[1] = -parseFloat(operands[0]);
                result = parseFloat(result) * -parseFloat(operands.splice(0,1));
                operators.shift();
                continue;
            }
            operators.shift();
            result = parseFloat(result) * parseFloat(operands.splice(0,1));
            console.log("my operands" + operands + "my operators: " + operators + 'my current result: ' + result + "iteration: " + i );
        }else if(operators[0] == "/" ||operators[0] == '/-'){
            if(operators[0] == '/-' ){
                operators.shift();
                operators.unshift("/");
                operands[1] = -parseFloat(operands[0]);
                result = parseFloat(result) / -parseFloat(operands.splice(0,1));
                operators.shift();
                continue;
            }
            operators.shift();
            result = parseFloat(result) / parseFloat(operands.splice(0,1));
            console.log("my operands" + operands + "my operators: " + operators + 'my current result: ' + result + "iteration: " + i );
        }else if(/^[\+\-\/x][\+\-\/x]$/.test(operators[0])){
            operators = operators[0].split("");
            operators.shift();
            console.log(operators[0])
        }
    }
    this.setState((state) =>({
        displayData: result
        }))

}

    render() { 
        return (
            <div id='app'>
                <div id="calculator">

                <input id='calculator-display' value={this.state.displayData} ></input>

                    <div id='numbers'>
                    {this.state.buttons.numbers.map((item) => (
                    <button className='calculator-button' id={item.id} onClick={() => this.handleInput(item.display ,this.state)}>{item.display}</button>
                ))}
                    {this.state.buttons.other.map((item) => (
                    <button className='calculator-button' id={item.id} onClick={() => this.handleInput(item.display, this.state)}>{item.display}</button>
                ))}
                    </div>
                    <div id='operands'>
                        {this.state.buttons.operands.map((item) => (
                            <button className='calculator-button' id={item.id} onClick={() => this.handleInput(item.display)}>{item.display}</button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Calculator;