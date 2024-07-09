import ClientCollection from "@/backend/db/ClientCollection"
import Client from "@/core/Client"
import RepositoryClient from "@/core/RepositoryClient"
import { useEffect, useState } from "react"
import useVisible from "./useVisible"

const useClients = () => {
  const repository: RepositoryClient = new ClientCollection()

  const { 
    formVisible,
    tableVisible, 
    showForm, 
    showTable } = useVisible()


  const [clients, setClients] = useState<Client[]>([])
  const [client, setClient] = useState<Client>(Client.empty())
  
  const getAll = () => {
    repository.getAll().then(clients => {
      setClients(clients)
      showTable()
    })
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAll, [])

  const selectedClient = (client: Client) => { setClient(client); showForm() }
  const deleteClient = async (client: Client) => { await repository.delete(client); getAll() }

  const saveClient = async (client: Client) => { await repository.save(client); getAll() }
  const newClient = () => { setClient(Client.empty); showForm() }

  return {
    selectedClient,
    deleteClient,
    tableVisible,
    saveClient,
    newClient,
    showTable,
    clients,
    client,
    getAll
  }
}

export default useClients