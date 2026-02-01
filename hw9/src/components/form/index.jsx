import { useForm, useWatch } from "react-hook-form";
import styles from "./styles.module.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const name = useWatch({
    control,
    name: "name",
  });

  const onSubmit = (data) => {
    console.log("submited", data);
    reset();
  };

  return (
    <div className={styles.formBox}>
      <form className={styles.formBox} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.formInput}
          placeholder="Name"
          type="text"
          {...register("name", { required: "name is required" })}
        />
        {name === "Bobby" && (
          <input
            className={styles.formInput}
            placeholder="Surname"
            {...register("surname", { required: "surname is required" })}
          />
        )}
        {errors.name && <p>{errors.name.message}</p>}
        {errors.surname && <p>{errors.surname.message}</p>}
        <button className={styles.formButton}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
