interface ITheatre {
  theaterName: string;
  theaterAddr: string;
  allowRefund: boolean;
  endorse: boolean;
  snack: boolean;
  vipTag: boolean;
  startPrice: number;
  price: number
}

interface ILabel {
  label: string
  value: string
}

interface ISearchState {
  searchContent: string
  searchHistory: string[]
  hostSearchHistory: string[]
}

interface IRootState {
  movieSearch: ISearchState
}

interface ICityS {
  lastVisitCityList: ICityItem[]
  hotCityList: ICityItem[]
  allCityList: ICityItem[]
  bcode: number
}

interface ICityItem {
  name: string,
  spellName: string,
  id: number,
  fullname: string,
  sortLetters: string
}

interface ISpotcheck {
  id: string
  timer: string
  number: string
  carName: string
  checkCount: number
  checkTotalCount: number
}


interface IMovie {
  _id: {
    '$oid': string
  },
  'id': string,
  'movieImg': string,
  'title': string,
  'originalTitle': string,
  'average': string,
  'stars': string,
  'ratingsCount': string,
  'durations': string,
  'year': string,
  'genres': string,
  'casts': string,
  'directors': string,
  'summary': string,
  'vd': string,
  'state': string,
  'imgs': [],
  '__v': number
}
