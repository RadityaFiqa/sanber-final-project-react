export const searchQuery = (query) => {
  return { type: "SEARCH_QUERY", query };
};

export const contains = (item, query) => {
  const { company, title, location } = item;
  if (
    company.includes(query) ||
    title.includes(query) ||
    location.includes(query)
  ) {
    return true;
  }

  return false;
};
