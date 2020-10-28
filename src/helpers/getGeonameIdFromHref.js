const getGeonameIdFromHref = (url) => {
  const indexOfGeonameId = url.indexOf('geonameid');
  const geonameIdWithSlash = url.substring(indexOfGeonameId);
  const geonameId = geonameIdWithSlash.slice(0, -1);

  return geonameId;
};

export default getGeonameIdFromHref;
