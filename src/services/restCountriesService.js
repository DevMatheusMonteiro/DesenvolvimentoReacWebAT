export async function fetchCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
