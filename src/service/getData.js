// src/service/getJson.js

/**
 * @function
 * @param  { string } p_url - The URL of a JSON file zo be loaded
 * @return { JSON }   The content of the JSON file
 * @throws { Error }  If the file does not exists, an error is thrown
 */
export async function getJson(p_url)
{ return fetch(p_url)
    .then(response =>
      { if (response.ok)
        { 
          return response.json()
         }
        else
        { throw new Error(`'${response.url}' not found`) }
      }
     )
}

