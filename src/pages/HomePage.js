import React, { useEffect } from "react";
import { PageTitle } from "../components/PageTitle";
import PokeList from "../components/PokeList";
import { SearchBox } from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../features/pokemons/pokemonSlice";

export const HomePage = () => {
  const { search, page, types } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons({ page, search, types }));
  }, [page, search, types, dispatch]);
  return (
    <>
      <PageTitle title="Pokedex" />
      <SearchBox />
      <PokeList />
    </>
  );
};
