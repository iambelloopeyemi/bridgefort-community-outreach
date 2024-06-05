const formatLinks = (links: string[]) => {
  return links.map((link) => ({
    linkName: link,
    linkRoute: link.split(" ").join("-").toLowerCase(),
  }));
};

export { formatLinks };
