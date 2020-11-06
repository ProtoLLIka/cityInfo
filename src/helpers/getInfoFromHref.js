const getInfoFromHref = (url, paramName) => {
  const indexOfId = url.indexOf(paramName);
  const continentIdWithSlash = url.substring(indexOfId);
  const continentId = continentIdWithSlash.slice(0, -1);

  return continentId;
};

export default getInfoFromHref;
