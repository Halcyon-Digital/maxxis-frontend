import axios from 'axios';

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
export const allNews = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/news`);
  const data = res.data;
  return data;
};

export const video = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_PROXY}/api/v1/video/one`
  );
  const data = res.data;
  return data;
};
export const videoOne = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/video`);
  const data = res.data;
  return data;
};

export const allBanner = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/banners`);
  const data = res.data;
  return data;
};

export const allJobs = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/job`);
  const data = res.data;
  return data;
};

export const reportsUser = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/contact`);
  const data = res.data;
  return data;
};

export const categoriesData = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/category`);
  const data = res.data;
  return data;
};
export const tireSizeData = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/size`);
  const data = res.data;
  return data;
};

export const getDealer = async (token) => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/dealer`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.data;
  return data;
};

export const allTires = async (token) => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/tires`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.data;
  return data;
};

export const myOrder = async (token) => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.data;
  return data;
};

export const changeStatus = async ({ token, body, key }) => {
  console.log(token, body, key);
  const res = await axios.put(
    `${process.env.REACT_APP_PROXY}/api/v1/orders/${key}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = res.data;
  return data;
};

export const allProducts = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/products`);
  const data = res.data;
  return data;
};
