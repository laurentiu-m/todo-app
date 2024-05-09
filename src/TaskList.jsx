function TaskList() {
  return (
    <div className="flex flex-col gap-5">
      <hr className="h-px bg-grey border-0" />

      <div className="flex flex-col">
        <div className="flex flex-row place-items-center gap-3">
          <input
            id=""
            type="checkbox"
            value=""
            className="appearance-none w-4 h-4 rounded border border-grey"
          />
          <label htmlFor="" className="text-xs font-medium">
            A task to complete
          </label>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
