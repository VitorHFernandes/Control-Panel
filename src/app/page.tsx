'use client'
import { useState } from "react";
import Client from "@/core/Client";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Form from "@/components/Form";

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  
  const clients = [
    new Client('Ana'      , 34, '1'),
    new Client('José'     , 22, '2'),
    new Client('André'    , 21, '3'),
    new Client('Wallace'  , 21, '4'),
    new Client('Mauricio' , 50, '5'),
    new Client('Rodrigo'  , 43, '6'),
    new Client('Maykol'   , 37, '7'),
    new Client('Izadora'  , 20, '8'),
    new Client('Vítor'    , 22, '9'),
    new Client('João'     , 8, '10'),
    new Client('Allan'    , 10, '11')
  ]

  const selectedClient = (client: Client) => { setClient(client); setVisible('form') }
  const excludedClient = (client: Client) => { setClient(client); setVisible('form') }

  const saveClient = (client: Client) => { setClient(client); setVisible('table') }
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
