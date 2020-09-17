import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormInput from "../Components/Web-Elements/FormInput";

export default function ProfileForm() {
  const [startDate, setStartDate] = useState(new Date(1990, 0, 1));
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  // const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [skill, setSkill] = useState([
    { skilltype: "Front-end", isChecked: false },
    { skilltype: "Back-end", isChecked: false },
    { skilltype: "Full-stack", isChecked: false },
  ]);

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
  let skillChange = (param) => {
    param.isChecked = !param.isChecked;
    let newSkillData = [...skill];
    setSkill(newSkillData);
  };
  // let setStartDateChange = (e) => {
  //   setStartDate(e.target.value);
  // };

  const resultForm = (e) => {
    e.preventDefault();
    if ((fullName.length < 1 || email.length< 1 || password.length< 1 || address.length < 1)) {
      alert("invalid input");
    } else {
      let filteredSkill = skill.filter((item) => item.isChecked == true);
      let resultSkill = [...filteredSkill];
      let arrSkill = resultSkill.map((item) => [item.skilltype]);
      let joinedSkill = arrSkill.join(", ");
      console.log(arrSkill);
      alert(
        `Fullname: ${fullName} \n E-mail: ${email} \n Password: ${password} \n Address: ${address} \n Birthdate: \n ${startDate} \n Gender: ${gender} \n Skill: ${joinedSkill}`
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="form-group col-lg-6">
          <form>
            <FormInput
              inputTitle="Full Name"
              changeHandler={nameChange}
              state={fullName}
              placeholder="Example: Dohn Joe"
              type="text"
            />
            <br />
            <FormInput
              inputTitle="Email"
              changeHandler={emailChange}
              state={email}
              placeholder="Example: openyourdoor@fbi.com"
              type="email"
            />
            <br />
            <FormInput
              inputTitle="Password"
              changeHandler={passwordChange}
              state={password}
              placeholder="Example: ••••••• << something like that"
              type="password"
            />
            <br />
            <label className="h4">Address</label>
            <textarea
              type="text"
              rows="4"
              className="w-100 form-control"
              autoComplete="off"
              placeholder="Example: Grove St. Ganton, Los Santos, US"
              onChange={addressChange}
              value={address}
              required
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
                name="genderRadio"
                id="maleRadioId"
                value="male"
                onChange={() => setGender("Male")}
                checked={gender == "Male"}
              />
              <label class="form-check-label" for="maleRadioId">
                Male
              </label>
              <br />
              <input
                class="form-check-input"
                type="radio"
                name="genderRadio"
                id="femaleRadioId"
                value="female"
                onChange={() => setGender("Female")}
                checked={gender == "Female"}
              />
              <label class="form-check-label" for="femaleRadioId">
                Female
              </label>
            </div>
            <br />
            <label className="h4">Skill</label>
            <br />
            <div class="form-check form-check">
              {skill.map((item, index) => {
                return (
                  <div key={index}>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id={item.skilltype}
                      value="option1"
                      checked={item.isChecked}
                      onChange={() => skillChange(item)}
                    />
                    <label class="form-check-label" for={item.skilltype}>
                      {item.skilltype}
                    </label>
                    <br />
                  </div>
                );
              })}
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
