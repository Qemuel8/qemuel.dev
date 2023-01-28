import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './quoteBox.css';
import getQuotes from './quotes.js'
import getImages from './images.js'

const image1 = require("./images/image1.jpg");
const image2 = require("./images/image2.jpg");
const image3 = require("./images/image3.jpg");
const image4 = require("./images/image4.jpg");
const image5 = require("./images/image5.jpg");
const image6 = require("./images/image6.jpg");
const image7 = require("./images/image7.jpg");
const image8 = require("./images/image8.jpg");
const image9 = require("./images/image9.jpg");
const image10 = require("./images/image10.jpg");
const tweetImage = require('./images/tweet.png'); 
const number = Math.floor(Math.random() * 11);
console.log(getQuotes()[1].text)


class QuoteBox extends Component {
  state={
    number: Math.floor(Math.random() * 11),
    tweet:"",
  }

  newQuote = () =>{
    this.setState({
      number: Math.floor(Math.random() * 11)
    })
  }
  returnTweet = () =>{
    let tweet = [];
    tweet.push(getQuotes()[this.state.number].text);
    tweet.push("\r\n\n-")
    tweet.push(getQuotes()[this.state.number].author);
    tweet = tweet.join(" ")
    console.log(tweet);
    return tweet;
  }
   
  renderQuotes() {
    return(
      <div>
      <head>
      <link rel="stylesheet" href="quoteBox.css"></link>
      </head>
      <body>
        <div className="box">
          <div   id="quote-box" className="quote-box">
            <div className="image-box">
              <img className="quote-image" src={getImages()[this.state.number]}></img>
              <div className="content">
                <div className="text-box">
                  {         
                    <p className="quote" id="text">{getQuotes()[this.state.number].text}</p>
                  }
                {
                  <p className="author" id="author">-{getQuotes()[this.state.number].author}</p>
                }
            </div>
            <div className="buttons">
              <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${escape(this.returnTweet())}`} target='_blank' rel=" noopener noreferrer"><img className="tweetImage" src={tweetImage}></img></a>
              <button className="new-quote-button" id="new-quote" onClick={this.newQuote}>New Quote</button>
            </div>
              </div>
            </div>
          </div>
        </div>
          
      </body>
      </div>
    )
  }
  render() {
    return(
     <div className="quoteBox">
      {this.renderQuotes()}
     </div>
    );
  
  }
}

export default QuoteBox;
