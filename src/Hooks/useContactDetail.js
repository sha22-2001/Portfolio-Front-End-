import useSanityData from './useSanityData';

const useContactDetail = () => {
  const query = '*[_type == "contactDetail"]';
  return useSanityData(query);
};

export default useContactDetail;
