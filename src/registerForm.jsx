import React from "react";
import { useForm } from "./useForm";

export default function RegisterForm() {
  const { values, handleChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      studentId: "",
      password: "",
      confirmPassword: "",
      phone: "",
      department: "",
      year: "",
      terms: false,
    },
    (v) => console.log("Registration Submitted:", v)
  );

  return (
   <form className="register-form" onSubmit={handleSubmit}>

      <h3>Register</h3>

      <label>
        Full Name
        <input name="name" value={values.name} onChange={handleChange} />
      </label>

      <label>
        Email
        <input name="email" value={values.email} onChange={handleChange} />
      </label>

      <label>
        Student ID
        <input name="studentId" value={values.studentId} onChange={handleChange} />
      </label>

      <label>
        Password
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </label>

      <label>
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone Number
        <input name="phone" value={values.phone} onChange={handleChange} />
      </label>

      <label>
        Department
        <select name="department" value={values.department} onChange={handleChange}>
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
        </select>
      </label>

      <label>
        Year of Study
        <select name="year" value={values.year} onChange={handleChange}>
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </label>

      <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input type="checkbox" name="terms" checked={values.terms} onChange={handleChange} />
        I agree to the Terms & Conditions
      </label>

      <button>Register</button>
    </form>
  );
}
