import React, { Component } from 'react';
import './markdown.css';
import { marked } from 'marked';
const markdownText = require("./fccText.md");
const anime = require("./anime.png");





class Markdown extends Component {
  constructor(props){
    super(props)

  this.state = {
    text: "",
    input: {__html: "myText" },
    }   

  }
async componentDidMount(){
  let myText = await fetch(markdownText)
  .then(response => response.text())
  .then(text => {
    return text;
  })
  
  this.setState({
    text: myText,
  })
  let object= {__html: marked.parse(myText).replace(/\r/g, '<br>')}
   this.setState({
    input: object
   })
}


onInput =(event) =>{
	let object= {__html: marked.parse(event.target.value).replace(/\r/g, '<br>')}
      this.setState(() => ({
        input: object,
        text: event.target.value
      }))
    }



  render() { 
    return (
      <div className='markdown-machine'>
        <div className='editor-box'>
              <button className='expand-preview'>
              <img className='button-image' src={anime}></img>
            </button>
          <div id="editor-label">Editor</div>
      <textarea id="editor"  value={this.state.text}  onChange={this.onInput}>
          </textarea>
          </div>
          <div className='preview-box'>
           
            <div id='preview' dangerouslySetInnerHTML={this.state.input}></div>

            
            <div id="preview-label">
              Preview
            </div>
            <button className='expand-preview'>
              <img className='button-image' src={anime}></img>
            </button>
        </div>
      
      </div>
    );
  }
}
 
export default Markdown;