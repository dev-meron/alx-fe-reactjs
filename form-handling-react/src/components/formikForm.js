import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Formik Data:", values);
    alert("Formik Registration Successful!");
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />

          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;