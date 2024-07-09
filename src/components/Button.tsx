interface iButton {
  color?: 'blue' | 'green' | 'gray'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ color = 'gray', onClick, className, children }: iButton) => {
  return (
    <button onClick={ onClick }
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