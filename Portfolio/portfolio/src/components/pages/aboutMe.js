import React, { Component } from 'react';

const newsUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3284ecb11fb74199ae497031bb5d6b33";

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state={
      newsData:{}};

  fetch(newsUrl).then(d => d.json())
  .then(d => {
    this.setState({
        newsData:d
    })
    this.newsSum = this.state.newsData.articles.map(function(row, index){
      return(
        <div className ="feature">
        <article id="featured">
        {/* <a href="#"><img className="img-responsive" src={require("../../Assets/images/1.jpg")} alt=""/></a> */}
        <a href="#"><img className="img-responsive fixedImage"  src={row.urlToImage} alt=""/></a>
        <h3>{row.title}</h3>
        <p>{row.description}</p>
        <a href="#" className="readmore">Read more</a>
        </article> 
        </div>  

      );
    });
    this.render();
  });

}

  render(){

    if(!this.state.newsData) return <p>Loading ....</p>
    return (
      // <div className="container-fluid">
      //   This is the about me page
      // </div>


    <div id="news">
    
        <div id="adbanner">
          {/* <div id="ad">
            <a href="#"><p>Advertise Here</p></a>
          </div>  */}
        </div> 


    
        <div id="secwrapper"> 
        
          <section>
            {this.newsSum}
          </section>
        </div>

    </div>

    );
  }
  
}


export default AboutMe;
