import { useState } from "react"
import Input from "./Input"
import Client from "@/core/Client"
import Button from "./Button"

interface iForm {
  client: Client,
  cancel?: () => void
}

const Form = ({ client, cancel }: iForm) => {
  const id = client?.id
  const [name, setName] = useState(client?.name ?? '')
  const [age, setAge] = useState(client?.age ?? 0)

  return (
    <div>
      { id ? (
        <Input text="ID" value={id} readOnly />
      ) : false }
      <Input text="Name" value={name} onChange={setName} className="mb-5" />
      <Input text="Age" value={age} type="number" onChange={setAge} className="mb-5" />
      
      <div className="flex justify-end mt-7">
        <Button color="green" className="mr-2">
          { id ? 'Update' : 'Save' }
        </Button>
        <Button onClick={cancel}>
            Cancel
        </Button>
      </div>
    </div>
  )
}

export default Form