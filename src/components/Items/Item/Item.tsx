
import { Link } from 'react-router-dom';

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => {
  const [image] = item.images

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img width="450" height="300" className="card-img-top" src={image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <Link to={`/items/${item.id}`}><h5 className="fw-bolder">{item.title}</h5></Link>
            {`USD ${item.price}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;