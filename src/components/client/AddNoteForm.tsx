"use client";
import { Todo } from "@/types/Todo";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

const AddNoteForm = () => {
  const initialValues: Todo = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(10, "Enter At Least 10 Characters")
      .required("Todo Title Is Required"),
    description: Yup.string()
      .min(10, "Enter At Least 10 Characters")
      .required("Todo Description Is Required"),
  });

  const onSubmit = (values: Todo, formActions: FormikHelpers<Todo>) => {
    // addTodo(values.todo);
    console.log(values);
    formActions.resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  console.log(
    formik.getFieldProps("description"),
    formik.getFieldProps("title")
  );

  return (
    <div className="my-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex">
          <div className="flex-grow mr-2">
            <input
              type="text"
              id="title"
              //   name="title"
              placeholder="Title"
              className="w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500">{formik.errors.title}</div>
            )}
          </div>
          <div className="flex-grow mr-2">
            <input
              type="text"
              id="description"
              //   name="title"
              placeholder="description"
              className="w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500">{formik.errors.description}</div>
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
