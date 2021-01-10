import { useEffect } from "react";
import { connect } from "react-redux";

const ItemDetail = (props) => {
  // useEffect(()=>{
  //   console.log(props)
  // }, [])
  if (props.details) {
    return (
      <div className="container">
        <h2>Details</h2>
        <div className="grid_nio">
          <img className="modelImage" src={`${props.details.image}`} alt="nothing" />
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

const mapStateToProps = (state) => {
  return {
    details: state.selected,
  };
};
export default connect(mapStateToProps)(ItemDetail);
