import firebase from "@/backend/config";
import Client from "@/core/Client";
import RepositoryClient from "@/core/RepositoryClient";

class ClientCollection implements RepositoryClient {

  conversor = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
      const data = snapshot?.data(options)

      return new Client(data.name, data.age, snapshot?.id)
    }
  }

  async save(client: Client): Promise<Client> { return client; }
  async delete(client: Client): Promise<Client> { return client; }
  async getAll(): Promise<Client[]> { return []; }

}

export default ClientCollection