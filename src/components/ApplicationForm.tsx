import { useForm } from 'react-hook-form';

import { FormErrors } from './FormErrors';

export interface ApplicationFormData {
  firstName: string;
  purpose: string;
  isNotPrinceAndrew: boolean;
}

export interface ApplicationFormProps {
  onSubmit(): void;
}

const validateNotPrinceAndrew = (value: boolean) =>
  value === true || "We don't accept Prince Andrews here";

export function ApplicationForm({ onSubmit }: ApplicationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ApplicationFormData>();

  return (
    <div>
      <h2>Tell us a little something about you</h2>
      <form className="application__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="application__field">
          <div>First name</div>
          <input
            id="apply-firstname"
            data-testid="apply-firstname"
            placeholder="First name"
            {...register('firstName')}
          />
        </div>

        <div className="application__field">
          <div>Loan purpose</div>
          <select
            id="apply-purpose"
            data-testid="apply-purpose"
            {...register('purpose')}
          >
            <option value="" hidden>
              State your purpose
            </option>
            <option value="SkiBoat">Ski Boat</option>
            <option value="PizzaExpressParty">Party at Pizza Express</option>
            <option value="SuperInjunction">Super-injunction</option>
          </select>
        </div>

        <div className="application__field">
          <label htmlFor="apply-princeandrewcheck">poo</label>
          <input
            id="apply-princeandrewcheck"
            data-testid="apply-princeandrewcheck"
            type="checkbox"
            {...register('isNotPrinceAndrew', {
              validate: validateNotPrinceAndrew
            })}
          />
          <span>I am not Prince Andrew</span>
        </div>

        <FormErrors errors={errors} />

        <button
          data-testid="apply-submitbutton"
          className="application__submit"
          type="submit"
        >
          Apply
        </button>
      </form>
    </div>
  );
}
