import React from "react";
import { useForm } from "./useForm";

export default function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm(
    {
      studentId: "",
      password: "",
      semester: "",
      remember: false,
    },
    (v) => console.log("Login Submitted:", v)
  );

  return (
   <form className="login-form" onSubmit={handleSubmit}>

      <h3>Login</h3>

      <label>
        Student ID
        <input name="studentId" value={values.studentId} onChange={handleChange} />
      </label>

      <label>
        Password
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </label>

      <label>
        Semester
        <select name="semester" value={values.semester} onChange={handleChange}>
          <option value="">Select Semester</option>
          <option value="1">1st Semester</option>
          <option value="2">2nd Semester</option>
          <option value="3">3rd Semester</option>
          <option value="4">4th Semester</option>
          <option value="5">5th Semester</option>
          <option value="6">6th Semester</option>
        </select>
      </label>

      <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input type="checkbox" name="remember" checked={values.remember} onChange={handleChange} />
        Remember Me
      </label>

      <button>Login</button>
    </form>
  );
}
