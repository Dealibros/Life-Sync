export async function apiFetch(url, methodCall, body, apiKey) {
  const response = await fetch(url, {
    method: methodCall,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
    },
    body: body,
  });
  return await response.json();
}
