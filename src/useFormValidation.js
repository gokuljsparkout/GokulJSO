
import { useState } from "react";

function useFormValidation(INITIAL_STATE,validate) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };





  return {values, handleChange , handleSubmit,errors, isSubmitting};
}

export default useFormValidation;