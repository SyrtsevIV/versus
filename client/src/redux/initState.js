const initState = {
  profileStats: {
    stats: {
      mmr: null,
      rating: null,
      won: null,
      lost: null,
      gold: null,
      silver: null,
      bronze: null,
    },
    user: {
      login: '',
      email: '',
      avatar: '',
    },
    rating: null,
    allPlayerValue: null,
    compare: {
      mmr: 0,
      rating: 0,
      won: 0,
      lost: 0,
      score: 0,
      missed: 0,
      gold: 0,
      silver: 0,
      bronze: 0,
    },
    customProfile: []
  },
  profile: {},
  userSession: {},
  mainPage: '',
  match: {
    score: {
      player1: 0,
      player2: 0,
    },
  },
  mainPageTours: [],
  ratings: {
    tableTennis: [],
  },
  tableTennis: [],
  tourList: {
    past: [],
    current: [],
    future: [],
  },
  tourItem: {},
  userInTour: [],
  history: {
    player1: '',
    player2: '',
    duration: 0,
    tour: '',
    score: {
      player1: 0,
      player2: 0
    }
  },
  bracket: [],
  
};

export default initState;
