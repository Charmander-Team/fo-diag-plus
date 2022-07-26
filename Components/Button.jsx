const Button = ({label, onClick = null, classList = ""}) => {
  return (
    <button onClick={onClick} className={`rounded-lg py-2 px-4 ${classList}`}>
      {label}
    </button>
  );
}

export default Button;
