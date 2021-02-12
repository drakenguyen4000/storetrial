import React from "react";
import { Spinner, Container } from "reactstrap";

const Loading = () => {
  return (
    <Container>
      <div className="text-dark">
        <div className="mt-3"><Spinner /><span className="h3"> Loading...</span></div>
      </div>
    </Container>
  );
};

export default Loading;