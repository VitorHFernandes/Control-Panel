
interface iInput {
  type?: 'text' | 'number',
  text: string,
  value: any,
  readOnly?: boolean
}

const Input = ({ readOnly, value, text, type = 'text' }: iInput) => {
  return (
    <div className="flex flex-col">
      <label className="mb-4">
        {text}
      </label>
      <input 
        type={type} 
        value={value}  
        readOnly={readOnly} 
        className={`
          border border-purple-500 rounded-lg 
          focus:outline-none bg-gray-50
          px-4 py-2
        `}
      />
    </div>
  )
}

export default Input