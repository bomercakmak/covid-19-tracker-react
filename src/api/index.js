import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, received, deaths, lastUpdate },
    } = await axios.get(url);
    return {
      confirmed,
      received,
      deaths,
      lastUpdate,
    };
  } catch (error) {}
};
