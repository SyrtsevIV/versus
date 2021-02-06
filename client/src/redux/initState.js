const initState = {
  profileStats: {
    stats: {
      mmr: null,
      rating: null,
      won: null,
      lost: null,
      gold: null,
      silver: null,
      bronze: null
    },
    user: {
      login: '',
      email: '',
      avatar: '',
    },
    rating: null,
    allPlayerValue: null,
    compare : {
      mmr: 1,
      rating: 2,
      won: 3,
      lost: 4,
      score: 5,
      missed: 6,
      gold: 7,
      silver: 8,
      bronze: 9,
    }
  }
};

export default initState;
