import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./registerForm"; 

export default function App() {
  return (
    <div className="container">
      <h1>Student Forms</h1>

      <div className="forms-wrapper">
        <LoginForm />
        <RegisterForm />
      </div>

      <p style={{ marginTop: 12, color: "#666" }}>
        Open console and type in the forms to see logs.
      </p>
    </div>
  );
}
