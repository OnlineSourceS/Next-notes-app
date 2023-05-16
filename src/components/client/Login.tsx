"use client";

import { FormikHelpers, useFormik } from "formik";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";

interface LoginFormData {
  email: string;
  password: string;
}
const initialValues: LoginFormData = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const onSubmit = (
  values: LoginFormData,
  formActions: FormikHelpers<LoginFormData>
) => {
  console.log(values);
  formActions.resetForm();
};

const Register = () => {
  // * Initializing useFormik Hook
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                className={`w-full border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
                placeholder="Enter your email"
                required
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                type="password"
                className={`w-full border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
                placeholder="Enter your password"
                required
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Log In
            </button>
            <div className="text-center mt-4">
              <span className="text-gray-600">Already have an account?</span>{" "}
              <Link href="/register">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
