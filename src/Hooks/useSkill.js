import useSanityData from './useSanityData';

const useSkill = () => {
  const query = '*[_type == "skill"]';
  return useSanityData(query);
};

export default useSkill;
