import { Client, Account, Databases, Storage, Avatars } from "appwrite";


export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '65ff8ee1650f6bcf7508',
  databaseId: '660117804df4dfdcc005',
  storageId: '6601174d50722b31a464',
  userCollectionId: '6601180837038c986ba9',
  postCollectionId: '660117ba1231a48fec44',
  savesCollectionId: '6601182cd26d83a3c62b',
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
