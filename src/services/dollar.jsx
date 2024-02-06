export async function getDollar() {
    const response = await fetch("https://back-ladulcetradicion.fly.dev/dollar", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const valores = await response.json();
    return valores;
  }