export enum del {
  Y,
  N,
}

export enum postType {
  ETC = 'ETC',
  FREE = 'FREE',
  COMPANY = 'COMPANY',
  FOOT = 'FOOT',
}

export const POST_TYPE_PRIORITY_NAME_MAP = {
  [postType.ETC]: '기타',
  [postType.FREE]: '자유',
  [postType.COMPANY]: '회사',
  [postType.FOOT]: '음식',
};

export enum step {
  first,
  second,
  thrid,
}
