import { useEffect } from "react";
import { connect } from "react-redux";
import { showItem, addItem } from "../action";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  useEffect(() => {
    console.log("Items Details");
    props.showItem(props.item_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.details) {
    return (
      <div className="container">
        <h2>Details</h2>
        <div className="details-container">
          <img
            className="modelImage"
            src={`${props.details.image}`}
            alt="nothing"
          />
          <div className="detail">
            <div>{props.details.brand}</div>
            <p className="description">{props.details.description}</p>
            <strong>{props.details.price}</strong>
            <div>
              <button onClick={() => props.addItem(props.item_id)}>
                Add to Cart
              </button>
              <Link to={`/shoppingcart`}>
                <button>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div className="container"></div>;
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    details: state.show,
    item_id: ownProps.match.params.id,
  };
};

export default connect(mapStateToProps, { showItem, addItem })(ItemDetail);
