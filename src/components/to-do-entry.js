export default function ToDoEntry() {
  return (
    <div className="input-group">
      <input type="text" placeholder="New Item" />
      <input type="datetime-local" />
      <button>Add</button>
    </div>
  );
}
