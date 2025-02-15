const baseUrl = "https://fakestoreapi.com"

export async function fetchData(apiPath) {
  try {
    const ifRecipt = await fetch(`${baseUrl}${apiPath}`);
    if (!ifRecipt.ok) {
      throw new Error(`Error on fetching data`);
    }
    const fetchedData = await ifRecipt.json();
    return fetchedData;
  } catch (error) {
    console.log(error.message);
  }
}
