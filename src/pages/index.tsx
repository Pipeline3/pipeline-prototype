import useFetch from 'hooks/useFetch';

const Index = () => {
  const options = {
    baseUrl: 'https://www.nlotto.co.kr',
    method: 'GET',
    url: '/common.do',
    params: {
      method: 'getLottoNumber',
      drwNo: 588,
    },
  };

  const [data] = useFetch(options);

  if (!data) return <></>;

  return <h1> Hello </h1>;
};

export default Index;
