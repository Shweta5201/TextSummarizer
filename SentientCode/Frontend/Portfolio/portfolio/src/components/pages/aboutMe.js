import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

const newsUrl = "http://localhost:1337/getAllItems";
const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';
class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false,
     newsData:{}
     };
    fetch(newsUrl).then(d => d.json())
  .then(d => {
    this.setState({
    show: false,
    image: '../../Assets/images/background.jpg',
        newsData:d

    })
this.newsfull=this.state.newsData.map(function(row, index){
        return(
        <div className ="feature">
        <article id="featured">
        {/* <a href="#"><img className="img-responsive" src={require("../../Assets/images/1.jpg")} alt=""/></a> */}
        <a href="#"><img className="img-responsive fixedImage"  src={row.urlToImage} alt=""/></a>

        <p>{row.actual_text}</p>



        </article>
        </div>

      );
    })
  this.newsSum=this.state.newsData.map(function(row, index){
        return(
        <div className ="feature">
        <article id="featured">
        {/* <a href="#"><img className="img-responsive" src={require("../../Assets/images/1.jpg")} alt=""/></a> */}


        <p>{row.summary}</p>



        </article>
        </div>

      );
    })
     });
  }

   handleClick() {
    this.setState({
      show: !this.state.show
    });
  }


  render() {
    return (
       <div className="App">
        <p className="App-intro">
          <button onClick={ () => this.handleClick() }>Summarize</button>
        </p>
        <ToggleDisplay hide={this.state.show} >

          <section>
            {this.newsSum}
          </section>
        </ToggleDisplay>

        <ToggleDisplay if={this.state.show} tag="section">
          <section>
            {this.newsfull}
          </section>
        </ToggleDisplay>
      </div>
    );
  }
}


export default AboutMe;