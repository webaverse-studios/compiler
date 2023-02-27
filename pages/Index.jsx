import React, {useEffect, useState} from 'react';

/*
http://localhost:3000/https://webaverse.github.io/procgen-assets/avatars/male-procgen.vrm
*/

console.log('load top');

const Home = () => {
  console.log('render Home');
  const [baseUrl, setBaseUrl] = useState('');
  useEffect(() => {
    setBaseUrl(window.location.href);
  }, []);

  return (
    <pre>{baseUrl}api/?u=URL_TO_COMPILE</pre>
  );
};
export const Index = () => {
  console.log('render Index');
  return (
    <Home />
  );
};