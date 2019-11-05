import * as React from "react";
import "./Form.css";
const Form: React.FC = () => {
  const [data] = React.useState([
    { label: "Name :", for: "cname", type: "text", plchdlr: "Enter Your Name" },
    {
      label: "Contact Number :",
      for: "cnum",
      type: "text",
      plchdlr: "Enter Your Number"
    },
    {
      label: "Email Address :",
      for: "email",
      type: "email",
      plchdlr: "Enter Your Email"
    }
  ]);
  return (
    <div>
      <form action="">
        {data.map((fdata, index) => (
          <div className="row">
            <div key={index} className="col-25">
              <label htmlFor={fdata.for}>{fdata.label}</label>
            </div>
            <div className="col-75">
              <input
                type={fdata.type}
                placeholder={fdata.plchdlr}
                id={fdata.for}
              />
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col-25">
            <label htmlFor="description">Description :</label>
          </div>
          <div className="col-75">
            <textarea id="description" placeholder="write something here" />
          </div>
        </div>
       <div className="btn">
<input type="submit" value="Submit" />
       </div>
      </form>
    </div>
  );
};
export default Form;
