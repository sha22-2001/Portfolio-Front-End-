import useSanityData from './useSanityData';

const useResume = () => {
  const query = '*[_type == "resume"]';
  return useSanityData(query);
};

export default useResume;
