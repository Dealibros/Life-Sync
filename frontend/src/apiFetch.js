export async function apiFetch(url, methodCall, body, apiKey, authorization) {
  console.log(authorization)
  const response = await fetch(url, {
    method: methodCall,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
      authorization: authorization
    },
    body: body,
  });
  return await response.json();
}
