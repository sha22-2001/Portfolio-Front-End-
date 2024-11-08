import useSanityData from './useSanityData';

const useSocialLinks = () => {
  const query = '*[_type == "socialLinks"]';
  return useSanityData(query);
};

export default useSocialLinks;
