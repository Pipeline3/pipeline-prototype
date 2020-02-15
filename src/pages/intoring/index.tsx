import useFetch from 'hooks/useFetch';

const Index = () => {
  const options = {
    baseUrl: 'http://openapi.jeonju.go.kr',
    method: 'GET',
    url: '/rest/toilet',
    params: {
      authApiKey:
        'l77L9ZW18kWcpVFJYqzwzkZfUSRvWirqX1q%2FvEGR3Ff%2FysMNjhQdpaQLnvMq5VlQjM4aYeDYMMftXOD3Yte%2BRw%3D%3D',
      dataValue: '기린',
      dataSid: '1',
      dong: '완산구',
      startPage: '1',
      pageSize: '10',
    },
  };

  const [data] = useFetch(options);

  console.log('intoring=>', data);

  return <h1> Hello </h1>;
};
export default Index;
