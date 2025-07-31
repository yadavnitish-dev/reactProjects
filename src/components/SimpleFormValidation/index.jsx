import React, { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    validateInput(name, value);
  };

  const validateInput = (getName, getValue) => {
    switch (getName) {
      case "username":
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: getValue.length < 3 ? "ERROR... Username can't be less than 3" : "",
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(getValue)
            ? ""
            : "ERROR... Invalid Email",
        }));

        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: getValue.length < 6 ? "ERROR... Password can't be less than 6" : "",
        }));
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const validateErrors = {};

    Object.keys(formData).forEach((dataItem) => {
      validateInput(dataItem, formData[dataItem]);
      if (errors[dataItem]) {
        validateErrors[dataItem] = errors[dataItem];
      }
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validateErrors,
    }));

    if (Object.values(validateErrors).every((error) => error === "")) {
      //submit Logic
    } else {
      console.log("Error... Please fix!!!!");
    }
  };

  console.log(errors);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-8xl pt-30 font-medium">Form Validation</h1>
      <form
        className="pt-30 flex flex-col gap-8 w-full max-w-3xl"
        onSubmit={handleOnSubmit}
      >
        <div className="flex flex-col gap-8 w-full">
          <div className="flex gap-2 w-full">
            <label htmlFor="username" className="px-5 py-2 rounded-full">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              placeholder="Enter Username"
              onChange={handleOnChange}
              className="px-5 py-2 bg-white text-black w-full rounded-xl"
            />
          </div>
          <span className="text-indigo-600 text-center">
            {errors?.username}
          </span>
          <div className="flex  gap-2 w-full">
            <label htmlFor="email" className="px-5 py-2 rounded-full">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter Email"
              onChange={handleOnChange}
              className="px-5 py-2 bg-white text-black w-full rounded-xl ml-8"
            />
          </div>
          <span className="text-indigo-600 text-center">{errors?.email}</span>
          <div className="flex gap-2 w-full">
            <label htmlFor="password" className="px-5 py-2 rounded-full">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter Password"
              onChange={handleOnChange}
              className="px-5 py-2 bg-white text-black w-full rounded-xl"
            />
          </div>
          <span className="text-indigo-600 text-center">
            {errors?.password}
          </span>
        </div>
        <button
          onSubmit={handleOnSubmit}
          className="bg-indigo-600 px-8 py-2 mt-10 mx-80 rounded-full text-xl hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
