import { Client, Account, Databases, Storage, Avatars } from "appwrite";


export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '66051ed5f058bf7d6d44',
  databaseId: '66051f1619c469416acd',
  storageId: '66051ef73306acdc4770',
  userCollectionId: '66051f45538c4455ad0e',
  postCollectionId: '66051f2d4404c0e9dbe4',
  savesCollectionId: '66051f656397fa92200e',
};

// export const appwriteConfig = {
//   url: import.meta.env.VITE_APPWRITE_URL,
//   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
//   storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
//   userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
//   postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
//   savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
// };

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
