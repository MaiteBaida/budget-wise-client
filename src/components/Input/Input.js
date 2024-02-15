import './Input.scss';

function Input() {
  return (
    function Input({ name, placeholder, icon, customClass, onChange, value, type }) {
      return (
          <div className='input__container'>
          <input name={name} className={`input ${customClass}`} placeholder={placeholder} onChange={onChange} value={value} type={type}></input>
          {icon ? (
            <img className="input__icon" src={icon}/>
          ): null}
        </div>
      )
  }
  );
}

export default Input;