export function getUserProfile() {
  return async (dispatch) => {
    const request = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
    const result = await request.json();
    const imageUrl = result[0].url;
    dispatch({
      type: GET_CAT,
      payload: imageUrl,
    });
  };
}
