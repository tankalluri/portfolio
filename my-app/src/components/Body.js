import React from 'react';

class Body extends React.Component {
  render() {
    return (<section id="contact" >
      <div className="container">
        <br />
        <br />
        <h2 className="text-center text-uppercase text-secondary mb-0">My Bio</h2>
        <hr />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form name="sentMessage" id="contactForm" noValidate="">
              <div className="control-group">
                  <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                  <p className="help-block text-danger" />
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </form>
          </div>
        </div>
      </div>
            </section>);
  }
}

export default Body;
