import React, { useState, useEffect } from 'react';

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { data, loading };
};

export default useFetchApi;
