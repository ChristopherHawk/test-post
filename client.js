const token = localStorage.getItem('tokenNameGetExample');
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
if (token) headers.Authorization = `Bearer ${token}`

export const fetchData = async (uri) => {
  try {
    const responseAPI = await fetch(
      `endpointExample.com${uri}`, {
      method: 'GET',
      headers
    })
    if (responseAPI.status === 401) {
      localStorage.setItem("tokenNameGetExample", "");
      alert("Token invalido o expirado.");
      window.location.reload();
    }
    return responseAPI.json();
  } catch (error) {
    console.log(error)
  }
};


