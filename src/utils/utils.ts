export function redirect(path: string) {
  window.location.href = path;
}

export function getAuthToken():string|null{
return sessionStorage.getItem("token")
}

export function authValidate():boolean{
  if(getAuthToken()) return true
  else return false
}

export function saveOnLocalStorage(key:string, value:string){
  localStorage.setItem(key, value)
}