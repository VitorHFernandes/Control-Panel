import Client from "@/core/Client"

interface iTable {
  clients: Client[]
}

const Table = ({ clients }: iTable) => {
  const renderHeader = () => {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    )
  }

  const renderData = () => {
    return clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}

export default Table