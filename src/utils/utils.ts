import { TOKEN } from "./constants";

export function redirect(path: string) {
  window.location.href = path;
}

export function getSessionItem(key: string): string | null {
  return sessionStorage.getItem(key);
}

export function authValidate(): boolean {
  if (getSessionItem(TOKEN)) return true;
  else return false;
}

export function saveOnLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}
