import cityData from '../data/city.json';
import moviesData from '../data/movie.json';
import theatreData from '../data/theatre.json';

/** 分页查询电影 */
export function queryMoviesApi(currentPage = 1, pageSize = 10) {
  return new Promise<typeof moviesData>(resolve => {
    setTimeout(function () {
      resolve(
        moviesData.slice((currentPage - 1) * pageSize, pageSize * currentPage) as typeof moviesData,
      );
    }, 2000);
  });
}

/** 随机刷新两部电影 */
export function randomRefreshMoviesApi() {
  return new Promise<typeof moviesData>(resolve => {
    setTimeout(function () {
      let randomStartIndex = Math.floor(
        Math.random() * (moviesData.length - 2),
      );
      resolve(moviesData.slice(randomStartIndex, randomStartIndex + 2));
    }, 2000);
  });
}

/**
 * 近期上映
 */
export function recentlyMoviesApi() {
  return new Promise<typeof moviesData>(resolve => {
    setTimeout(function () {
      // 因为是模拟数据，因此随机返回 10 条数据
      resolve(moviesData.slice(0, 10));
    }, 2000);
  });
}

/**
 * 即将上映
 */
export function upcomingMoviesApi() {
  return new Promise<typeof moviesData>(resolve => {
    setTimeout(function () {
      // 因为是模拟数据，因此随机返回 10 条数据
      resolve(moviesData.slice(70, 80));
    }, 2000);
  });
}

/**
 * 推荐电影
 */
export function recommendMoviesApi() {
  return new Promise<typeof moviesData>(resolve => {
    setTimeout(function () {
      // 因为是模拟数据，因此随机返回 10 条数据
      resolve(moviesData.slice(30, 40));
    }, 2000);
  });
}

/**
 * 经典电影
 * @returns
 */
export function classicMoviesApi() {
  return new Promise<typeof moviesData>(resolve => {
    setTimeout(function () {
      // 因为是模拟数据，因此随机返回 10 条数据
      resolve(moviesData.slice(40, 50));
    }, 2000);
  });
}

/**
 *  根据 id 来查询电影
 * @param id
 * @returns
 */
export function findMovieByIdApi(id: string) {
  return new Promise<IMovie>(resolve => {
    setTimeout(function () {
      const data = moviesData.filter(item => item.id === id)[0];
      resolve(data as any);
    }, 2000);
  });
}
/**
 * 根据电影名来搜索电影
 * @param title
 * @returns
 */

export function findMovieByTitleApi(title: string) {
  return new Promise<typeof moviesData>(resolve => {
    setTimeout(function () {
      const data = moviesData.filter(item => item.title.indexOf(title) !== -1);
      resolve(data);
    }, 2000);
  });
}

/**
 * 获取影院
 */
export function findAllTheatreApi() {
  return new Promise<ITheatre[]>(resolve => {
    setTimeout(function () {
      resolve(theatreData as unknown as ITheatre[]);
    }, 2000);
  });
}

/** 获取城市 */
export function findAllCityApi() {
  return new Promise<ICityS>(resolve => {
    setTimeout(function () {
      resolve(cityData);
    }, 2000);
  });
}
