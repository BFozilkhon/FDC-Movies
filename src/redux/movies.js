import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const getMovies = createAsyncThunk(
//   'movies/getMovies',
//   async function (_, { rejectWithValue }) {
//     try {
//       const response = await fetch(
//         'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr',
//         {
//           method: 'GET',
//           headers: {
//             'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//             'x-rapidapi-key':
//               '229e111cb1msh5187f4ffb24acb1p191483jsn80dcf500b2ac',
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error('Oops Semethign is wrong');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.massage);
//     }
//   }
// );

const getFetch = createSlice({
  name: 'movies',
  initialState: {
    list: [
      {
        id: 1,
        name: 'Qora Beva',
        url: 'https://uzstudio.tv/uploads/posts/2021-06/medium/1624991320_qora-beva-1.jpg',
      },
      {
        id: 2,
        name: 'Shang-chi Legend of the ten rings',
        url: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/04/Shang-Chi-Poster-Marvel.jpg',
      },
      {
        id: 3,
        name: 'Mortal Combat',
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/f56710bd-85c3-49b8-9260-2fa8a3d07c01/600x900',
      },
      {
        id: 4,
        name: 'Spiderman, No Way Home',
        url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
      },
      {
        id: 5,
        name: 'Tor Marvel Kino',
        url: 'https://marveldom.ru/wp-content/uploads/2019/09/Chris-Hemsworth-Thor-Art-by-PC-Designs.jpg',
      },
      {
        id: 6,
        name: 'Siderman , Home Coming',
        url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
      },
      {
        id: 7,
        name: 'Avengers',
        url: 'https://www.film.ru/sites/default/files/filefield_paths/https_blogs-images.forbes.com_scottmendelson_files_2019_03_payoff_1-sht_online_v6_domestic_lg-1200x675.jpg',
      },
      {
        id: 8,
        name: 'Doimiy',
        url: 'https://marvel.com.ru/uploads/images/b494bda820ae8cfa6843e8a6.jpg',
      },
      {
        id: 9,
        name: 'Home Alone 1',
        url: 'https://www.tvguide.com/a/img/catalog/provider/1/2/1-9441893422.jpg',
      },
      {
        id: 10,
        name: 'Home Alone 2 , New York Lost in',
        url: 'https://m.media-amazon.com/images/I/91tXzecvy-L._SL1500_.jpg',
      },
      {
        id: 11,
        name: 'Batman , Maystery of the batwoman',
        url: 'https://uzstudio.tv/uploads/posts/2021-06/medium/1624991320_qora-beva-1.jpg',
      },
      {
        id: 12,
        name: 'Superman',
        url: 'https://wallpaperaccess.com/full/2203550.jpg',
      },
      {
        id: 13,
        name: 'Chumoli odam 1',
        url: 'http://asil-media.net/rasmlar/images/2019/06/15/564b607e5555d6.42571315.jpg',
      },
      {
        id: 14,
        name: 'Chumoli odam va ari',
        url: 'http://images.vfl.ru/ii/1547400025/3447cb73/24938868.jpg  ',
      },
      {
        id: 15,
        name: 'Dushman ortida',
        url: 'https://uzbekcha.net/uploads/posts/2021-01/1610431729_1603145155_dushman-ortida.jpg',
      },
      {
        id: 16,
        name: 'Galaktika qo`riqchilari',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2sNUfEeTX8Bf_6tY0JKkAFNnzkZHAGycL7Hv3h5fHD-SdMcigDy29LpxTGMCR9_NS0U&usqp=CAU',
      },
      {
        id: 17,
        name: 'Temir odam',
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/555359d8-7866-4113-b0c5-b5e13e3bf1c8/600x900',
      },
      {
        id: 18,
        name: ' Galaktika qo`riqchilari 2',
        url: '  https://daxshat.tv/uploads/posts/2020-04/1587535297_9044.jpg',
      },
      {
        id: 19,
        name: 'X-men , Days of future past',
        url: 'https://wallpaperaccess.com/full/2547728.jpg',
      },
      {
        id: 20,
        name: 'Ironman 3',
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/272776a1-9beb-45a9-8e02-867ba9c7f571/600x900',
      },
    ],
    error: null,
    status: null,
  },
  // extraReducers: {
  //   [getMovies.pending]: (state) => {
  //     state.status = 'loading';
  //     state.error = null;
  //   },
  //   [getMovies.fulfilled]: (state, action) => {
  //     state.list = action.payload;
  //     state.status = 'success';
  //   },
  //   [getMovies.rejected]: (state, action) => {
  //     state.status = 'reject';
  //     state.error = action.payload;
  //   },
  // },
});

export default getFetch.reducer;
