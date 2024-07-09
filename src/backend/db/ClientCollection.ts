import firebase from "@/backend/config";
import Client from "@/core/Client";
import RepositoryClient from "@/core/RepositoryClient";

class ClientCollection implements RepositoryClient {

  #converter = {
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

  async save(client: Client): Promise<Client> { 
    if (client?.id) {
      await this.#collection().doc(client.id).set(client)
      return client; 
    } else {
      const docRef = await this.#collection().add(client)
      const doc = await docRef.get()
      const savedClient = doc.data()
      if (!savedClient) {
        throw new Error("Failed to save client.");
      }
      return savedClient;
    }
  }

  async delete(client: Client): Promise<Client> { 
    if (client?.id) {
      await this.#collection().doc(client.id).delete();
      return client;
    } else {
      throw new Error("Client ID is required for deletion.");
    }
  }

  async getAll(): Promise<Client[]> { return []; }

  #collection() {
    return firebase
      .firestore()
      .collection('clients')
      .withConverter(this.#converter)
  }

}

export default ClientCollection