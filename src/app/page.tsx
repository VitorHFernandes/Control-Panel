'use client'
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Form from "@/components/Form";
import useClients from "@/hooks/useClients";

export default function Home() {
  const { 
    selectedClient,
    deleteClient,
    tableVisible,
    saveClient,
    newClient,
    showTable,
    clients,
    client
  } = useClients();

  return (
    <div 
      className={`
        flex h-screen justify-center items-center 
        bg-gradient-to-r from-purple-500 to-blue-600
        text-white
      `}>
      <Layout title="Simple register">
        { tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color='green' className="mb-4" onClick={newClient}>
                New client
              </Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} excludedClient={deleteClient}></Table>
          </>
        ) : (
          <Form 
            client={ client } 
            cancel={() => showTable()} 
            clientChange={saveClient}
          />
        ) }
      </Layout>
    </div>
  );
}
