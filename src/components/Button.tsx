interface iButton {
  color: 'blue' | 'green' | 'green'
  className?: string
  children: React.ReactNode
}

const Button = ({ color, className, children }: iButton) => {
  return (
    <button 
      className={`
        bg-gradient-to-r from-${color}-400 to-${color}-700
        text-white px-4 py-2 rounded-md
        ${className}
      `}>
      {children}
    </button>
  )
}

export default Button