export type PagingModel<T> = {
  data: T[];
  recodesTotal: number;
  pageable: Pageable;
};

type Pageable = {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: true;
};
