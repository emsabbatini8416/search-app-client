import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { itemsSelector, fetchItemById } from "../../slices/itemsSlice"

const ItemDetail = () => {
  const dispatch = useAppDispatch();
  const { item, loading } = useAppSelector(itemsSelector);
  const { id } = useParams<{id: string}>()

  console.log(id)

  React.useEffect(() => {
    dispatch(fetchItemById(id))
  }, [dispatch, id])

  const [image] = item?.images || ''

  return (
    <>
    { loading && (
      <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={image} alt="..." /></div>
        <div className="col-md-6">
          <div className="small mb-1">SKU: {item?.id}</div>
          <h1 className="display-5 fw-bolder">{item?.title}</h1>
          <div className="fs-5 mb-5">
            <span>{`USD ${item?.price}`}</span>
          </div>
          <p className="lead">{item?.description}</p>
        </div>
      </div>
    )}
    </>
  )
}

export default ItemDetail;