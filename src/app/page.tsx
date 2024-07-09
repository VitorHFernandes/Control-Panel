'use client'
import { useEffect, useState } from "react";
import Client from "@/core/Client";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Form from "@/components/Form";
import RepositoryClient from "@/core/RepositoryClient";
import ClientCollection from "@/backend/db/ClientCollection";

export default function Home() {

  const repository: RepositoryClient = new ClientCollection()

  const [clients, setClients] = useState<Client[]>([])
  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  
  const getAll = () => {
    repository.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAll, [])

  const selectedClient = (client: Client) => { setClient(client); setVisible('form') }
  const excludedClient = async (client: Client) => { await repository.delete(client); getAll() }

  const saveClient = async (client: Client) => { await repository.save(client); getAll() }
  const newClient = () => { setClient(Client.empty); setVisible('form') }


  return (
    <div 
      className={`
        flex h-screen justify-center items-center 
        bg-gradient-to-r from-purple-500 to-blue-600
        text-white
      `}>
      <Layout title="Simple register">
        { visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color='blue' className="mb-4" onClick={newClient}>
                New client
              </Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} excludedClient={excludedClient}></Table>
          </>
        ) : (
          <Form 
            client={ client } 
            cancel={() => setVisible('table')} 
            clientChange={saveClient}
          />
        ) }
      </Layout>
    </div>
  );
}
