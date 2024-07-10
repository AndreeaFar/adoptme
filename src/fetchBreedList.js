// Fetch a list of breeds for a specified animal from the API
async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];

  if (!animal) return []; // Return empty array if animal parameter is missing.

  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!res.ok) {
    throw new Error(`breeds ${animal} fetch not ok`); // Throw error if fetch request fails.
  }

  return res.json(); // Return JSON object containing breed data.
}

export default fetchBreedList;
