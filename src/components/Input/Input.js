import './Input.scss';

function Input() {
  return (
    function Input({ name, placeholder, customClass, onChange, value, type }) {
      return (
          <input name={name} className={`input ${customClass}`} placeholder={placeholder} onChange={onChange} value={value} type={type}></input>
      )
  }
  );
}

export default Input;