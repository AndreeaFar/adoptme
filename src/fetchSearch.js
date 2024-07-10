// fetches the search results based on the given query parameters
async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  // perform the fetch request to get the pets based on the provided animal, location, and breed
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );
  // if the fetch request is not successful, throw an error
  if (!res.ok)
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
  // return the JSON response containing the search results
  return res.json();
}

export default fetchSearch;
