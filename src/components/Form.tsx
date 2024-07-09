import Input from "./Input"

interface iForm {

}

const Form = ({}: iForm) => {
  return (
    <div>
      <Input text="Name" value="Test" />
    </div>
  )
}

export default Form