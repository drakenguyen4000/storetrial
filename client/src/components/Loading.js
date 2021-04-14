import React from "react";
import { Spinner, Container } from "reactstrap";

const Loading = () => {
  return (
    <Container>
      <div className="text-dark">
        <Spinner />
        <span className="h3">Loading</span>
      </div>
    </Container>
  );
};

export default Loading;
