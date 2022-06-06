const { REACT_APP_ENPOINT, REACT_APP_APP_ID } = process.env


const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'app-id': `${REACT_APP_APP_ID}`
}


export const fetchData = async (uri, method, data) => {
  try {
    const responseAPI = await fetch(
      `${REACT_APP_ENPOINT}${uri}`, {
      method: method,
      data: data ? data : {},
      headers
    })
    return responseAPI.json();
  } catch (error) {
    console.log(error)
  }
};


