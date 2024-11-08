import useSanityData from './useSanityData';

const useDetail = () => {
  const query = '*[_type == "detail"]';
  return useSanityData(query);
};

export default useDetail;
