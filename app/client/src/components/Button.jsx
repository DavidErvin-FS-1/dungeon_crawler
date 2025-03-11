function Button({ label, className, onClick }) {
  return (
    <button type='button' className={`btn ${className}`} onClick={onClick}>
      <div className='inner-btn'>{label}</div>
    </button>
  )
}

export default Button
