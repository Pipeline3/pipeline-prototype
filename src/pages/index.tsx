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

  console.log('index=>', data);

  if (!data) return <></>;

  return <h1> Hello </h1>;
};

//https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${+drwNo}

export default Index;
