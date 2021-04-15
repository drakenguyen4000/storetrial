import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = (props) => {
  //grab list from mapStateToProps
  //find first items not caterogy men - i.e. and display
  const { list } = props;
  const { selectCat } = props;

  useEffect(() => {}, [selectCat]);

  const findRandom = () => {
    const randomList = [];
    const otherList = list.filter((item) => {
      return item.category !== selectCat ? item : null;
    });
    const random1 = Math.round(Math.random() * otherList.length);
    const newOtherList = otherList.filter((item, i) => {
      return i !== random1 ? item : null;
    });
    randomList.push(otherList[Math.round(Math.random() * otherList.length)]);
    randomList.push(
      newOtherList[Math.round(Math.random() * newOtherList.length)]
    );
    return randomList;
  };

  const featureList = (feature) => {
    return (
      <div className="item-container" key={feature._id}>
        <Link
          // className="image-link"
          to={`/list/${feature.category}/${feature._id}`}
          replace
        >
          <img
            className="item__image"
            src={`${feature.image}`}
            alt={`${feature.description}`}
            // alt="model"
          />
        </Link>
        <Link
          className="brand-link"
          to={`/list/${feature.category}/${feature._id}`}
          replace
        >
          <p className="brand">{feature.brand}</p>
        </Link>
        <Link
          className="description-link"
          to={`/list/${feature.category}/${feature._id}`}
          replace
        >
          <p className="description">{feature.description}</p>
        </Link>
        <p className="price">
          <strong>${feature.price}</strong>
        </p>
      </div>
    );
  };

  if (list) {
    const feature = findRandom();
    return (
      <div className="sidebar">
        <div>
        <h5>Featured Items</h5>
        </div>
        <div className="feature">
        {feature.map((feature) => {
          return feature ? featureList(feature) : null;
        })}
        </div>
      </div>
    );
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    list: state.item.items,
    selectCat: state.item.category,
  };
};

export default connect(mapStateToProps)(Sidebar);