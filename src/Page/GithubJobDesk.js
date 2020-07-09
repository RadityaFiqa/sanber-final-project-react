import React, { useEffect } from "react";
import fetch from "node-fetch";
import "../App.css";
import Jobs from "../Component/Jobs";
import { useSelector, useDispatch } from "react-redux";
import { searchQuery } from "../Redux/action";

const GithubJobDesk = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:3001/api").then((res) =>
        res.json()
      );
      dispatch({ type: "GRAB_API", data });
    })();
  }, []);

  const HandleSearch = (search) => {
    dispatch(searchQuery(search));
  };

  return (
    <Jobs datane={state.item} onSearchHandle={(value) => HandleSearch(value)} />
  );
};

export default GithubJobDesk;
