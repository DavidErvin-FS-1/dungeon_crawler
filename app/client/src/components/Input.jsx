function Input({
  value,
  onChange,
  placeholder,
  type,
  className,
  disabled,
  autoFocus,
  required,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      autoFocus={autoFocus}
      required={required}
      className={`input ${className}`}
    />
  )
}

export default Input
