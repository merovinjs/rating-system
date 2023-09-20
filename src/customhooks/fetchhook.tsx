export async function fetchPost<T>(path: string, data: T) {
  const result = await fetch(path, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (await result.json()) as T;
}
