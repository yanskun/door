import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { type FormInput, schema } from "./schema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useEffect } from "react";

export function ToDo() {
  const formMethods = useForm<FormInput>({
    resolver: valibotResolver(schema),
    reValidateMode: "onBlur",
  });
  const {
    handleSubmit,
    register,
    control,
    resetField,
    formState: { errors },
  } = formMethods;
  const { fields, append } = useFieldArray({ control, name: "tasks" });

  const onSubmit = handleSubmit((data) => {
    const form = data.form;
    resetField("form");
    append({ title: form, checked: false });
  });

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <FormProvider {...formMethods}>
        <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={onSubmit}>
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add a task"
              {...register("form")}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Add
            </button>
          </div>
          {errors.form && <p className="text-red-400">{errors.form.message}</p>}

          <ul className="divide-y divide-gray-200 px-4">
            {fields.map((field, index) => (
              <li key={field.title} className="py-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    {...register(`tasks.${index}.checked`)}
                  />
                  <label htmlFor="todo1" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">{field.title}</span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </form>
      </FormProvider>
    </div>
  );
}
