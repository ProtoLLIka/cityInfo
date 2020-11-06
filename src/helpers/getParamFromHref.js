const getParamFromHref = (url, paramName) => {
  const indexOfParam = url.indexOf(paramName);

  if (indexOfParam < 0) {
    return null;
  }

  const paramWithSlash = url.substring(indexOfParam);
  const param = paramWithSlash.slice(0, -1);

  return param;
};

export default getParamFromHref;
