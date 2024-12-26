import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  value,
  onChange,
  placeholder,
  type,
  label,
  error,
  disabled,
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          padding: "10px",
          width: "100%",
          border: error ? "1px solid red" : "1px solid #ccc",
          borderRadius: "5px",
          outline: "none",
          fontSize: "1rem",
        }}
      />
      {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired, // Function to handle value change
  placeholder: PropTypes.string, // Placeholder text
  type: PropTypes.string, // Type of the input (text, number, etc.)
  label: PropTypes.string, // Optional label for the input
  error: PropTypes.string, // Optional error message
  disabled: PropTypes.bool, // Whether the input is disabled
};

InputField.defaultProps = {
  placeholder: "",
  type: "text",
  label: "",
  error: "",
  disabled: false,
};
