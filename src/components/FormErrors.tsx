import { FieldErrors } from "react-hook-form";

export interface FormErrorsProps<TFieldValues> {
  errors: FieldErrors<TFieldValues>;
}

export function FormErrors<TFieldValues>({
  errors
}: FormErrorsProps<TFieldValues>) {
  if (Object.values(errors).length === 0) return null;

  return (
    <ul className="errors__list">
      {Object.entries(errors).map(([key, error]: [string, any]) => (
        <li className="errors__item" key={key}>
          {error?.message}
        </li>
      ))}
    </ul>
  );
}
