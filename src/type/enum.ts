export enum del {
  Y,
  N,
}

export enum postType {
  ETC = '기타',
  FREE = '자유',
  COMPANY = '회사',
  FOOT = '먹방',
  REAL_ESTATE = '부동산',
  STOCK = '주식/투자',
  DATE = '썸연애',
  HOBBY = '취미',
  SHOPPING = '쇼핑',
  PET = '반려동물',
  SPORTS = '스포츠',
  MILITARY = '군대',
  RECRUITMENT = '채용',
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
