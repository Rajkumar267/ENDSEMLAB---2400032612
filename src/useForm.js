import { useState } from "react";

export function useForm(initial = {}, onSubmit = () => {}) {
  const [values, setValues] = useState(initial);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const next = type === "checkbox" ? checked : value;
    console.log("Change:", name, "=>", next);
    setValues((prev) => ({ ...prev, [name]: next }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit:", values);
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
}
