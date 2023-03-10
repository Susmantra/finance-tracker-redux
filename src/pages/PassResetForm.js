import React, { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { Form, Button } from "react-bootstrap";

export const PassResetForm = () => {
  const [formDt, setFormDT] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setError("");
      value.length < 6 &&
        setError("Paaaword should contain at least 6 characters");

      !/[0-9]/.test(value) && setError("At least one number is required.");
    }

    setFormDT({
      ...formDt,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="border p-3 py-4 rounded shadow-lg">
      <h3 className="text-center">Reset your password!</h3>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Email *"
          name="email"
          placeholder="sma@gmail.com"
          required={true}
        />
        <CustomInput
          label="New Password *"
          name="password"
          type="password"
          placeholder="*******"
          required={true}
        />
        <CustomInput
          label="Confirm Password *"
          name="ConfirmPassword"
          type="password"
          placeholder="********"
          required={true}
        />

        <Form.Text>
          Password should contain at least 6 characters, one uppercase, one
          lower case and a number!
          {error && (
            <ul>
              <li className="text-danger fw-bolder fs-4">{error}</li>
            </ul>
          )}
        </Form.Text>
        <div className="d-grid">
          <Button type="submit" variant="outline-danger">
            Reset Password
          </Button>
        </div>
      </Form>
    </div>
  );
};
