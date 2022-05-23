import useForm from "../hooks/useForm";

const InputComponent = ({handlerNewTask}) => {
  const [form, handlerChangeForm, handlerResetForm] = useForm({ taskname: "" });
  const {taskname} = form;

  const handlerSubmit = (e) => {
    e.preventDefault();

    handlerResetForm();
      handlerNewTask(taskname)
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="taskname"
          onChange={handlerChangeForm}
          value={taskname}
          placeholder="Write some task"
        />
        <input className="submitButton" type="submit" value="Create Task" />
      </form>
      <div>{taskname}</div>
    </div>
  );
};

export default InputComponent;
