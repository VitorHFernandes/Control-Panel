import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client"

export default function Home() {
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

  return (
    <div 
      className={`
        flex h-screen justify-center items-center 
        bg-gradient-to-r from-purple-500 to-blue-600
        text-white
      `}>
      <Layout title="Simple register">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  );
}
