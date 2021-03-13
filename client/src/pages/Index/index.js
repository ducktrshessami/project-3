import React from 'react';
import Placeholder from "../../images/Buy_a_home_placeholder.png";
function Index() {
  return(
    <div className="container">
      <h3>Welcome Renter!</h3>
      <p>We are here to spill all the tea on your next potential apartment or home. Our reviews could you avoid a disaster or find your next place to live. Reading our reviews is always free and easy; simply search for a unit by address. If you would like to create a review you will need to log in to your account or sign up. Happy hunting!</p>
      <br/>
      <div class="row">
        <div class="col s12 m2 l2"></div>
        <div class="col s12 mm8 l8">
          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image">
                <img src={Placeholder}></img>
              </div>
              <span class="card-title">Read reviews</span>
              <div class="card-content">
                <p>Read reviews posted by past renters on the palaces you are interested in.</p>
              </div>
              <div class="card-action">
              <a href="/search-apt" className="waves-effect waves-light btn-large">Search</a>
              </div>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image">
                <img src={Placeholder}></img>
              </div>
              <span class="card-title">Write a review</span>
              <div class="card-content">
                <p>Help a future renter by leaving a review of the places you've lived.</p>
              </div>
              <div class="card-action">
              <a href="/write-review" className="waves-effect waves-light btn-large">New Review</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col s12 m2 l2"></div>
      </div>       
    </div>

  );

}

export default Index;