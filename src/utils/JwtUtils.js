export const generateJwtToken = (username, phoneNumber) => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(JSON.stringify({ username, phoneNumber }));
  const secret = "your-secret-key"; 

  const signature = btoa(
    new TextEncoder()
      .encode(`${header}.${payload}.${secret}`)
      .toString("base64")
  );

  const token = `${header}.${payload}.${signature}`;
  return token;
};
