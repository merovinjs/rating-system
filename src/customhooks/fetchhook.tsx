import { getLocalStorage } from "@/utily/localStorage";

export async function fetchPost<T>(path: string, data: T) {
  const token = getLocalStorage("token");
  const BearerToken = `Bearer ${token}`;
  const result = await fetch(path, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: BearerToken,
    },
  });
  if (!result.ok) throw new Error("Error");

  return (await result.json()) as T;
}
