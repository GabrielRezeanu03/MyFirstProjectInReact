import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Phone number</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea rows="6" placeholder="Type a short message here" />
        <button className="btn btn-light">Submit</button>
      </form>
    </div>
  );
};

export default Form;
