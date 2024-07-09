'use client'

import Client from "@/core/Client"
import { IconEdit, IconTrash } from "./Icons"

interface iTable {
  clients: Client[],
  selectedClient?: (client: Client) => void
  excludedClient?: (client: Client) => void
}

const Table = ({ clients, selectedClient, excludedClient }: iTable) => {

  const showActions = excludedClient || selectedClient

  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        { showActions ? <th className="p-4">Actions</th> : false }
      </tr>
    )
  }



  const renderData = () => {
    return clients?.map((client, i) => {
      return (
        <tr 
          key={client.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? renderActions(client) : false }
        </tr>
      )
    })
  }

  const renderActions = (client: Client) => {
    return(
      <td className="flex justify-center items-center">
        { selectedClient ? (
          <button onClick={ () => selectedClient?.(client) }
            className={`
              flex justify-center items-center p-2 m-1
              text-green-600 rounded-full hover:bg-purple-100
            `}  
          >
            {IconEdit}
          </button>
        ) : false }
        { excludedClient ? (
          <button onClick={ () => excludedClient?.(client) }
            className={`
              flex justify-center items-center p-2 m-1
              text-red-500 rounded-full hover:bg-purple-100
            `}  
          >{IconTrash}</button>
        ) : false }
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead 
        className={`
          text-gray-100
          bg-gradient-to-r from-purple-500 to-purple-800
        `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}

export default Table