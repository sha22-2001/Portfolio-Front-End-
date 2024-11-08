import useSanityData from './useSanityData';

const useStatus = () => {
  const query = '*[_type == "state"]';
  return useSanityData(query);
};

export default useStatus;
