
async function getGlossaries() {
    const res = await fetch("http://"+(process.env.backendhost || "127.0.0.1:4000"));
    console.log(res);
    return await res.json();
  }
export default getGlossaries;