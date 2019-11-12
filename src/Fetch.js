import React from 'react'
import useFetch from 'fetch-suspense';

export const MyFetchingComponent = ({url, method = 'GET'}) => {
  const response = useFetch(url, { method });
  // console.log(JSON.stringify(response, null, 2 ))
  return <img src={response.message} alt="avatar" />
  // return response
};
