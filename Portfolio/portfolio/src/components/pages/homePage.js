import React, { Component } from 'react';


class HomePage extends Component {
  render() {
    return (
      <section>
        <div className="home-page">
          <div className ="container">
              <div className="row">
                    <div className="col-lg-12">
                        <img className="img-responsive" src={require("../../Assets/images/me.png")} alt=""/>
                        <div className="intro-text">
                            <span className="name">Saugat Prem Kaushik Chetry</span>
                            <hr className="star-light"/>
                            <span className="skills">Full Stack Developer - Machine Learning Enthusiast</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    );
  }
}

export default HomePage;
