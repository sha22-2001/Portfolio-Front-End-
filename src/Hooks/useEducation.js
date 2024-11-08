import useSanityData from './useSanityData';

const useEducation = () => {
  const query = '*[_type == "education"]';
  return useSanityData(query);
};

export default useEducation;
