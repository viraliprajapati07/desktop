import React, { useState } from 'react';

function Feedback() {
  const [activeStars, setActiveStars] = useState(0);

  const handleStarClick = (index) => {
    setActiveStars(index + 1);
  };

  const handleStarHover = (index) => {
    setActiveStars(index + 1);
  };
 return (
    <>
      <section className="middle-content">
        <div className="middle-100vh-content">
          <div className="cred-forms-logo cfl-absolute">
            <img src="assets/images/main-logo.png" alt="brand logo"/>
          </div>
          <div className="register common-credform-padding feedback-form">
            <div className="register-inner">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="register-form feedback-form common-credform">
                      <div className="common-credform-inner">
                        <h3>TELL US YOUR FEEDBACK</h3>
                        <div className="feedback-star">
                          <div className="feedback-starflex">
                            {[1, 2, 3, 4, 5].map((value, index) => (
                              <i
                                key={index}
                                className={`fa fa-star-o${activeStars >= value ? ' active' : ''}`}
                                onClick={() => handleStarClick(index)}
                                onMouseEnter={() => handleStarHover(index)}
                              
                              />
                            ))}
                          </div>
                        </div>
                        <form>
                          <div className="form-group">
                            <input type="text" name="name" placeholder="Name" className="form-control"/>
                          </div>
                          <div className="form-group">
                            <input type="text" name="phone" placeholder="Mobile" className="form-control"/>
                          </div>                                          
                          <div className="form-group">
                            <textarea type="textarea" name="comment" placeholder="Comment" className="form-control"></textarea>
                          </div>
                          <div className="common-credform-btns">
                            <div className="common-credform-loginbtns mb-0 comm-mob-sec">
                              <button type="button" className="btn login-btn" id="feedback_btn">
                                Next
                              </button>
                            </div>
                            <div className="common-credform-loginbtns mb-0 comm-desk-sec">
                              <div className="mb-0 mfc-formsend-btn">
                                <button type="button" className="btn feedback-mob-sendbtn" id="feedback_btn">Send</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	
    </>
  );
}

export default Feedback;
