export async function login({ values }) {
  const response = await fetch("https://back-ladulcetradicion.fly.dev/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    }),
  });
  const valores = await response.json();
  return valores;
}
export async function recuperarContraseña({ email }) {

  const response = await fetch(
    "https://back-ladulcetradicion.fly.dev/user/passwordrecovery",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );
  const valores = await response.json();
  return valores;
}
export async function nuevoCodigo({ email }) {

  const response = await fetch(
    "https://back-ladulcetradicion.fly.dev/user/createnewcode-mobile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );
  const valores = await response.json();
  return valores;
}
export async function validationCode({ values }) {
  const response = await fetch(
    `https://back-ladulcetradicion.fly.dev/user/verificar-email/${values.email}/${values.code}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const valores = await response.json();
  return valores;
}
