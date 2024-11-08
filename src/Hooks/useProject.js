import useSanityData from './useSanityData';

const useProject = () => {
  const query = '*[_type == "project"]';
  return useSanityData(query);
};

export default useProject;
