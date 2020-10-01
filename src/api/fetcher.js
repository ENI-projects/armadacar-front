const API_URL = process.env.VUE_APP_HASURA_URL;

export const fetcher = (token, query, variables) => {   
  return fetch(API_URL, {
    method: "POST",    
    headers: {
      "content-Type": "application/json",
       Authorization: `Bearer ${token}`      
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
};

export const fetchAsync = async (token, fetcher, query, variables) => {    
  const response = await fetcher(token, query, variables);
  if (!response.ok) {
    throw response;
  }
  try {
    return await response.json();
  } catch (err) {
    console.error("Error parsing JSON", err);
  }
};

export const fetcherAPI = (token, action) => {     
  let url = process.env.VUE_APP_API_USER_MANAGEMENT_BASEURL;
  let method = "";
  let body = undefined;
  switch (action) {
    case "getUsers":
      url = url + "/users";
      method = "GET";
      break;    
  }
  return fetch(url, {
    method: method,    
    headers: {
      "content-Type": "application/json",
       Authorization: `Bearer ${token}`      
    },
    body: body
  });
};


export const fetchAsyncAPI = async (token, fetcherAPI, action, params) => {
  const response = await fetcherAPI(token, action, params);
  if (!response.ok) {
    throw response;
  }
  try {
    return await response.json();
  } catch (err) {
    console.error("Error parsing JSON", err);
  }
};

