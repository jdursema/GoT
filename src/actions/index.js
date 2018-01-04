export const fakeAction = () => ({type: 'FAKE'});

export const fetchData = () => async (dispatch) => {
  try {
    const fetchGoTData = await fetch(`http://localhost:3001/api/v1/houses`);
    const parsedData = await fetchGoTData.json();

    dispatch(storeHouseData(parsedData));
  } catch (error){
    console.log(error);
  }
};

export const storeHouseData = (arrayOfHouses) => ({ 
  type: 'STORE_HOUSE_DATA',
  arrayOfHouses
});
