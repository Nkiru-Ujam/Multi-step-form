function Button({ type, onClick, children }) {
  return (
    <button className={`${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
