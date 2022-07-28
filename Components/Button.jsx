const Button = ({label, onClick = null, classList = "", disabled = null}) => {
  return (
    <button onClick={onClick} className={`rounded-lg py-2 px-4 ${classList}`} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
