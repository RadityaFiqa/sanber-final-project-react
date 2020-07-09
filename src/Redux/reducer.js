import { combineReducers } from "redux";
import { contains } from "./action";
import _ from "lodash";

const AboutState = {
  name: "Raditya Firman Syaputra",
  location: "Sragen , Jawa Tengah",
  AboutText:
    "Saya adalah Siswa SMA kelas 11 dari Sragen jurusan MIPA. Saat ini saya sedang Mendalami dunia pemrograman khususnya Web dan Mobile Development.",
  Facebook: "https://www.facebook.com/your.future.soon/",
  Instagram: "https://instagram.com/sekutumu",
  Whatsapp: "https://api.whatsapp.com/send?phone=6281232254875",
};

const HomeState = {
  api: "http://localhost:3001/api",
  item: [],
  fullitem: [],
  search: "",
};

const AboutReducer = (state = AboutState, action) => {
  return state;
};

const HomeReducer = (state = HomeState, action) => {
  if (action.type === "GRAB_API") {
    return {
      ...state,
      fullitem: action.data,
      item: action.data,
    };
  } else if (action.type === "SEARCH_QUERY") {
    const { query } = action;
    if (query.length === 0) {
      return {
        ...state,
        search: query,
        item: state.fullitem,
      };
    } else {
      const filtered = _.filter(state.fullitem, (job) => {
        return contains(job, query);
      });
      return {
        ...state,
        search: query,
        item: filtered,
      };
    }
  }
  return state;
};

const reducer = combineReducers({
  HomeReducer,
  AboutReducer,
});

export default reducer;
