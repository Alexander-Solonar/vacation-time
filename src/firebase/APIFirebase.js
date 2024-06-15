const { getHousesCollection } = require('./firebaseConfig');

export const fetchHouses = async (setHousesList, lng) => {
  try {
    const projects = await getHousesCollection(lng);
    setHousesList(projects);
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};
