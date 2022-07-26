import React from 'react'
//import "../styles/checkout.css";

function Checkout() {
  return (
    <div class="row">
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">

        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label  className="label" for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
            <label  className="label" for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"></input>
            <label  className="label" for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
            <label  className="label" for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"></input>

            <div class="row">
              <div class="col-50">
                <label  className="label" for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"></input>
              </div>
              <div class="col-50">
                <label  className="label" for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"></input>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label   className="label" for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa"></i>
              <i class="fa fa-cc-amex" ></i>
              <i class="fa fa-cc-mastercard" ></i>
              <i class="fa fa-cc-discover" ></i>
            </div>
            <label   className="label" for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
            <label  className="label" for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
            <label   className="label" for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>

            <div class="row">
              <div class="col-50">
                <label  className="label" for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
              </div>
              <div class="col-50">
                <label   className="label" for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"></input>
              </div>
            </div>
          </div>

        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"></input> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" class="btn"></input>
      </form>
    </div>
  </div>

 
</div>
         

        
  )
}

export default Checkout
