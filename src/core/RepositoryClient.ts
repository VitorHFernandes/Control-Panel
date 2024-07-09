import Client from "./Client"

interface RepositoryClient {
  save(client: Client): Promise<Client>,
  delete(client: Client): Promise<Client>,
  getAll(): Promise<Client[]>
}

export default RepositoryClient