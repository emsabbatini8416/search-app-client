import React from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { itemsSelector, fetchItems } from "../../slices/itemsSlice"
import Item from "./Item";

const Items = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('q');

  const dispatch = useAppDispatch();
  const { items } = useAppSelector(itemsSelector);

  React.useEffect(() => {
    dispatch(fetchItems(query))
  }, [dispatch, query])

  return (
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      { items.map(item => <Item key={item.id} item={item} />) }
    </div>
  )
}

export default React.memo(Items);