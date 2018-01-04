export const fakeAction = () => ({type: 'FAKE'});

export const fetchData = () => async (dispatch) => {
  try {
    const fetchGoTData = await fetch('http://localhost:3001/api/v1/houses');
    const parsedData = await fetchGoTData.json();
    const swornMembers = await dispatch(fetchSwornMembers(parsedData))
    const cleanData = parsedData.map((house, index)=> {
      return Object.assign({}, house, {swornMembers: swornMembers[index]})
    })
    console.log(cleanData)

    dispatch(storeHouseData(cleanData));
  } catch (error){
    console.log(error);
  }
};

export const fetchSwornMembers = (housesArray) => async (dispatch) => {
  const unresolvedPromises = housesArray.map((house)=> {
    const swornMembers= house.swornMembers.map(async (memberURL)=> {
      const memberData = await fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: memberURL})
      });
      const members= await memberData.json()
      return {[members.name]: members.died || 'Alive'}
    })
    return Promise.all(swornMembers);

  })
  return Promise.all(unresolvedPromises);
}

export const storeHouseData = (arrayOfHouses) => ({ 
  type: 'STORE_HOUSE_DATA',
  arrayOfHouses
});
