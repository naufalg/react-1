import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ProfileForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  // const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState();
  const [skill, setSkill] = useState();

  let nameChange = (e) => {
    setFullName(e.target.value);
  };
  let emailChange = (e) => {
    setEmail(e.target.value);
  };
  let passwordChange = (e) => {
    setPassword(e.target.value);
  };
  let addressChange = (e) => {
    setAddress(e.target.value);
  };
  // let setStartDateChange = (e) => {
  //   setStartDate(e.target.value);
  // };

  const resultForm = (e) => {
    e.preventDefault();
    if ((fullName.length, email.length, password.length, address.length < 1)) {
      alert("invalid input");
    } else {
      alert(
        `Fullname: ${fullName} \n E-mail: ${email} \n Password: ${password} Address: \n ${address} Birthdate: \n ${startDate} \n`
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="form-group col-lg-6">
          <form>
            <label className="h4">Full Name</label>
            <input
              type="text"
              className="w-100 form-control"
              autoComplete="off"
              placeholder="Your name"
              onChange={nameChange}
              value={fullName}
            />
            <br />
            <label className="h4">Email</label>
            <input
              type="email"
              className="w-100 form-control"
              autoComplete="off"
              placeholder="Your email"
              onChange={emailChange}
              value={email}
            />
            <br />
            <label className="h4">Password</label>
            <input
              type="password"
              className="w-100 form-control"
              autoComplete="off"
              placeholder="Your password"
              onChange={passwordChange}
              value={password}
            />
            <br />
            <label className="h4">Address</label>
            <textarea
              type="text"
              className="w-100 form-control"
              autoComplete="off"
              placeholder="Your Address"
              onChange={addressChange}
              value={address}
            />
            <br />
            <label className="h4">Birthdate</label>
            <br />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-100 form-control block"
            />
            <br />
            <br />
            <label className="h4">Gender</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Male
              </label>
              <br />
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Female
              </label>
            </div>
            <br />
            <label className="h4">Skill</label>
            <br />
            <div class="form-check form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Front-end
              </label>
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Front-end"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Back-end
              </label>
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Back-end"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Full-stack
              </label>
            </div>
            <br />
            <button className="btn btn-info" type="submit" onClick={resultForm}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
      <br />
    </div>
  );
}
