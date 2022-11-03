export function mapCityToSectionListDatas(citys: ICityS) {
  return [
    {
      title: '最近', data: citys.lastVisitCityList,
    },
    {
      title: '热门', data: citys.hotCityList,
    },
    {
      title: 'A', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'a'),
    },
    {
      title: 'B', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'b'),
    },
    {
      title: 'C', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'c'),
    },
    {
      title: 'D', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'd'),
    },
    {
      title: 'E', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'e'),
    },
    {
      title: 'F', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'f'),
    },
    {
      title: 'G', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'g'),
    },
    {
      title: 'H', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'h'),
    },
    {
      title: 'J', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'j'),
    },
    {
      title: 'K', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'k'),
    },
    {
      title: 'L', data: citys.allCityList.filter(it => it.sortLetters.toLowerCase() === 'l'),
    },
  ]
}
