import {
  pipe,
  string,
  array,
  object,
  boolean,
  type InferInput,
  forward,
  partialCheck,
} from "valibot";

export const schema = pipe(
  object({
    form: string(),
    tasks: array(
      object({
        title: string(),
        checked: boolean(),
      })
    ),
  }),
  forward(
    partialCheck(
      [["form"], ["tasks"]],
      (input) =>
        input.tasks.filter((task) => !task.checked && task.title === input.form)
          .length === 0,
      "Task title must be different from the form field"
    ),
    ["form"]
  )
);
export type FormInput = InferInput<typeof schema>;
