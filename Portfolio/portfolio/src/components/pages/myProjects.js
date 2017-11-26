import React, { Component } from 'react';


class MyProjects extends Component {
  render() {
    return (

      <section>
            <div className="container">
              <div className="project-headings">
                <p className="intro-slate">Personal Projects</p>
                <p className="statement gunmetal">When I'm not freelancing, I'm working on digital products.</p>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <div className="expertise-block"><a href="https://ylbuilders.com" target="_blank" class="startup-brand"><img src={require("../../Assets/images/profile.png")}/></a>
                    <p className="description"><a href="https://ylbuilders.com" target="_blank">YL Builders </a>is platform that helps independent distributors of Young Living essential oils grow their business through automated class promotion and prospect follow-up management.</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="expertise-block"><a href="https://usebasin.com" target="_blank" class="startup-brand"><img src={require("../../Assets/images/profile.png")}/></a>
                    <p className="description">Basin is a form endpoint and submission management app. I designed and built the front-end, and <a href="https://anthonypenner.com/" target="_blank">Anthony Penner </a>built the backend. We launched it in June of this year.</p>
                    </div>
                </div>

                <div className="col-lg-4">
                  <div className="expertise-block"><a href="https://usebasin.com" target="_blank" class="startup-brand"><img src={require("../../Assets/images/profile.png")}/></a>
                    <p className="description">Basin is a form endpoint and submission management app. I designed and built the front-end, and <a href="https://anthonypenner.com/" target="_blank">Anthony Penner </a>built the backend. We launched it in June of this year.</p>
                    </div>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-4">
                  <div className="expertise-block"><a href="https://ylbuilders.com" target="_blank" class="startup-brand"><img src={require("../../Assets/images/profile.png")}/></a>
                    <p className="description"><a href="https://ylbuilders.com" target="_blank">YL Builders </a>is platform that helps independent distributors of Young Living essential oils grow their business through automated class promotion and prospect follow-up management.</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="expertise-block"><a href="https://usebasin.com" target="_blank" class="startup-brand"><img src={require("../../Assets/images/profile.png")}/></a>
                    <p className="description">Basin is a form endpoint and submission management app. I designed and built the front-end, and <a href="https://anthonypenner.com/" target="_blank">Anthony Penner </a>built the backend. We launched it in June of this year.</p>
                    </div>
                </div>

                <div className="col-lg-4">
                  <div className="expertise-block"><a href="https://usebasin.com" target="_blank" class="startup-brand"><img src={require("../../Assets/images/profile.png")}/></a>
                    <p className="description">Basin is a form endpoint and submission management app. I designed and built the front-end, and <a href="https://anthonypenner.com/" target="_blank">Anthony Penner </a>built the backend. We launched it in June of this year.</p>
                    </div>
                </div>
              </div>
            </div>
          </section>


    );
  }
}

export default MyProjects;
