const getContinentIdFromHref = (url) => {
  const indexOfId = url.indexOf('geonames');
  const continentIdWithSlash = url.substring(indexOfId);
  const continentId = continentIdWithSlash.slice(0, -1);

  return continentId;
};

export default getContinentIdFromHref;
