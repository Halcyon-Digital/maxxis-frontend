import axios from "axios";

export const allGallery = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/gallery`);
  const data = res.data;
  return data;
};

export const arrivals = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_PROXY}/api/v1/arrivals/all`
  );
  const data = res.data;
  return data;
};
export const allBanner = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/banners`);
  const data = res.data;
  return data;
};

export const reportsUser = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/contact`);
  const data = res.data;
  return data;
};
