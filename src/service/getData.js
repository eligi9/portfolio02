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

export async function getImages(p_urls){
  const images = await Promise.all( p_urls.map( src => new Promise((p_resolve, p_reject) => {
    const img = new Image();
    //Resolves the Dimensions of the Image
    img.onload = () => {
      p_resolve({ src, isPortrait: img.naturalHeight >= img.naturalWidth});
    }
    //Handles Error
    img.onerror = () => {
      p_reject(console.log("Error loading image"));
    }
    img.src = src;
  })))
  return images;
}


