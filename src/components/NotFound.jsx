import React from "react";
import { Card } from "react-bootstrap";

export default function NotFound() {
  return (
    <div className="mt-5 mx-5">
      <div>
        <Card style={{ background: "#2a3142", color: "#eef4fc" }}>
          <Card.Body>
            <h6 className="m-3 text-center text-warning">404! Page Not Found</h6>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
