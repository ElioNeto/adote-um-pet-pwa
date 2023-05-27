import { LIKE_COLLECTION, TOKEN } from "./constants";
import { deleteData, writeData } from "./firebase";

export function redirect(path: string) {
  window.location.href = path;
}

export function getSessionItem(key: string): string | null {
  return sessionStorage.getItem(key);
}

export function removeSessionItem(key: string) {
  return sessionStorage.removeItem(key);
}

export function authValidate(): boolean {
  if (getSessionItem(TOKEN)) return true;
  else return false;
}

export function saveOnLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getFromLocalStorage(key: string) {
  localStorage.getItem(key);
}

export function like(user: string, pet: string) {
  writeData(`${LIKE_COLLECTION}/${user}-${pet}`, { user, pet });
}

export function unlike(user: string, pet: string) {
  deleteData(`${LIKE_COLLECTION}/${user}-${pet}`);
}
