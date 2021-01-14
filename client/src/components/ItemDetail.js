import { useEffect } from "react";
import { connect } from "react-redux";
import { showItem } from "../action";

const ItemDetail = (props) => {
  useEffect(() => {
    console.log("Items Details")
    props.showItem(props.item_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.details) {
    return (
      <div className="container">
        <h2>Details</h2>
        <div className="grid_detail">
          <img
            className="modelImage"
            src={`${props.details.image}`}
            alt="nothing"
          />
          <div className="detail">
            <div>{props.details.brand}</div>
            <p className="description">{props.details.description}</p>
            <strong>{props.details.price}</strong>
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

export default connect(mapStateToProps, { showItem })(ItemDetail);
