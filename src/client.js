const { REACT_APP_ENPOINT, REACT_APP_APP_ID } = process.env

const token = localStorage.getItem('tokenNameGetExample');
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'app-id': `${REACT_APP_APP_ID}`
}
if (token) headers.Authorization = `Bearer ${token}`

export const fetchData = async (uri, method, data) => {
  try {
    const responseAPI = await fetch(
      `${REACT_APP_ENPOINT}${uri}`, {
      method: method,
      data: data ? data : {},
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


