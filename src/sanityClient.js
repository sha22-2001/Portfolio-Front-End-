// src/sanityClient.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'efs2nnkz', // Replace with your Sanity project ID
  dataset: 'about__detail', // Replace with your dataset name
  apiVersion: '2024-09-15', // Use a specific date string or a version
  token: 'sk8V0968tOIiKgSoCg1jz1VWY0DYK5rnGm4NhjXUYXBbnNVXCDegn8gCmv52gZ7dDqo2xrjUGNQcKpQGhwTj2g2CL33gIw5T0bkFfkDS0q3fa5jzuNnQVI0Xai93nb8VpyFI01FByJVn2PInDp3kGfxHBAxLBehtmKUzeXnnhzKddijiPPHI',
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true
});

export default client;
