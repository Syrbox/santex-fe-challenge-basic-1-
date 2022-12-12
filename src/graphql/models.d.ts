export type CollectionSortParameter = {
  id: SortOrder;
  createdAt: SortOrder;
  updatedAt: SortOrder;
  name: SortOrder;
  slug: SortOrder;
  position: SortOrder;
  description: SortOrder;
};

export type CollectionListOptions = {
  // Skips the first n results, for use in pagination
  skip: Int;
  // Takes n results, for use in pagination
  take: Int;
  // Specifies which properties to sort the results by
  sort: CollectionSortParameter;
  // Allows the results to be filtered
  filter: CollectionFilterParameter;
  // Specifies whether multiple “filter” arguments should be combines with a logical AND or OR operation. Defaults to AND.
  filterOperator: LogicalOperator;
};

export type CollectionList = {
  items: [Collection!]!;
  totalItems: Int!;
};
