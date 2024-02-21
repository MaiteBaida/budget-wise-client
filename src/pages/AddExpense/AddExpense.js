import "./AddExpense.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";

function AddExpense() {
  return (
    <main className="item-add">
      <h2>Add New Expense</h2>
      <form>
        <div>
          <label>EXPENSE NAME</label>
          <Input />
        </div>
        <div>
          <label>BUDGET</label>
          <Input />
        </div>
        <div>
          <label>EXPENSE TYPE</label>
          <Select required>
            <option>Fixed Expense</option>
            <option>Essential Expense</option>
            <option>Non-Essential Expense</option>
          </Select>
        </div>
        <div>
          <label>FREQUENCY</label>
          <Select required></Select>
        </div>
        <Button type="button" style="secondary" label="Cancel" />
        <Button type="submit" style="primary" label="Add" />
      </form>
    </main>
  );
}

export default AddExpense;
