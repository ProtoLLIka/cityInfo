const getCitySlugFromHref = (url) => {
  const indexOfSlug = url.indexOf('slug');
  const slugWithSlash = url.substring(indexOfSlug);
  const slug = slugWithSlash.slice(0, -1);

  return slug;
};

export default getCitySlugFromHref;
