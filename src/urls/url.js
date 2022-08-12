export default (builder) => (...paramObjects) => {
  const url = builder(Object.assign({}, ...paramObjects));
  const urlHasSlash = String(url).startsWith('/');

  if (!urlHasSlash) {
    throw new ReferenceError(`url (${url}) not start with slash`);
  }

  return `${url}`;
};
