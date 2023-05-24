import * as SecureStore from "expo-secure-store";


async function saveToken(value) {
  await SecureStore.setItemAsync("token", value);
}

async function getToken() {
  let result = await SecureStore.getItemAsync("token");
  if (result) {
    return result;
  } else {
    throw new Error("No values stored under that key.");
  }
}

export {saveToken, getToken};