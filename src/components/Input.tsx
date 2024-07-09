
interface iInput {
  type?: 'text' | 'number',
  text: string,
  value: any,
  readOnly?: boolean,
  className?: string,
  onChange?: (value: any) => void
}

const Input = ({ className, onChange, readOnly, value, text, type = 'text' }: iInput) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="m-2">
        {text}
      </label>
      <input 
        type={type} 
        value={value}  
        readOnly={readOnly} 
        onChange={e => onChange?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg 
          focus:outline-none bg-gray-100 px-4 py-2
          ${readOnly ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  )
}

export default Input