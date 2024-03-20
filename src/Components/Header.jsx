import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky-top">
      <div className="desktop-view-nav main-header">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="m-headerinner">
                <div className='bar-toggler change'>
                <div className='bar-toggler-inner'>
                  <div className='bar1'></div>
                  <div className='bar2'></div>
                  <div className='bar3'></div>
                </div>
                </div>
                <div className="m-headerinner-r">
                  <div className="m-headerinner-logo">
                    <img src="assets/images/main-logo.png" alt="brand logo"/>
                  </div>
                </div>
                <div className="m-headerinner-r">
                  <div className="m-headerinner-rtop">
                    <div className="m-headerinner-rtopflex">
                      <div className="m-headerinner-search">
                        <form>
                          <div className="seach-forminner">
                            <button type="button" className="search-btn btn"><img src="assets/images/search-icon.png" alt="search-icon"/></button>
                            <input type="text" placeholder="What are you looking for?"/>
                          </div>
                        </form>
                      </div>
                      <div className="m-headerinner-rtopflex-r">
                        <div className="m-headerinner-rtopflex-rinner">
                          <div className="language-switch">
                            <a href="#">AR</a> <span>/</span> <a href="#">EN</a>
                          </div>
                          <div className="user-propic">
                            <a href="#" className="user-droptoggle">
                              <img src="assets/images/user-propic.png" alt="profile picture"/>
                            </a>
                            <ul className="user-dropdown">
                              <li><a href="javascript:void(0)">Menu 1</a></li>
                              <li><a href="javascript:void(0)">Menu 2</a></li>
                              <li><a href="javascript:void(0)">Menu 3</a></li>
                            </ul>
                          </div>
                          <div className="fav-pro">
                            <a href="wishlist.html">
                              <img src="assets/images/fav-star.png" alt="fav star icon"/>
                            </a>
                          </div>
                          <div className="cart-icon">
                         <Link to ="cart">
                              <img src="assets/images/cart-icon.png" alt="cart icon"/>
                              
                              <span>3</span>
                              </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-headerinner-nav">
                <div className="main-menu">
                  <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/profile" activeClassName="active">My Account</NavLink></li>
                    <li><NavLink to="/influencers" activeClassName="active">Influencers</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact us</NavLink></li>
                    <li><NavLink to="/feedback" activeClassName="active">Feedback</NavLink></li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="mobile-view-nav">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="m-headerinner">
                <div className="bar-toggler">
                  <div className="bar-toggler-inner">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                </div>
                <div className="m-headerinner-r">
                  <div className="m-headerinner-rtop">
                    <div className="m-headerinner-prevlink d-none">
                      <a href="#"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                    </div>
                    <div className="m-headerinner-prevlink-title d-none">
                      <h5>Material</h5>
                    </div>
                    <div className="m-headerinner-rtopflex">
                      <div className="m-headerinner-rtopflex-r">
                        <div className="m-headerinner-rtopflex-rinner">
                          <div className="user-propic">
                            <span>Welcome Khalifa</span>
                            <a href="#" className="user-droptoggle">
                              <img src="assets/images/user-propic.png" alt="profile picture"/>
                            </a>
                            <ul className="user-dropdown">
                              <li><a href="javascript:void(0)">Menu 1</a></li>
                              <li><a href="javascript:void(0)">Menu 2</a></li>
                              <li><a href="javascript:void(0)">Menu 3</a></li>
                            </ul>
                          </div>
                          
                          <div className="cart-icon">
                            <a href="cart.html">
                              <img src="assets/images/cart-icon.png" alt="cart icon"/>
                              <span>3</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="toggle-searchbars">
                <div className="toggle-searchbars-inner">
                  <form>
                    <div className="seach-forminner">
                      <button type="button" className="search-btn btn"><img src="assets/images/search-icon.png" alt="search-icon"/></button>
                      <input type="text" placeholder="What are you looking for?"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Your mobile view code here */}
    </header>
  );
}

export default Header;
