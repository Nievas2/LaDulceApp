export async function login({ values }) {
  console.log(values.email, values.password);

  const response = await fetch("https://back-ladulce.fly.dev/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    }),
  });
  const valores = await response.json()
return valores;
}
