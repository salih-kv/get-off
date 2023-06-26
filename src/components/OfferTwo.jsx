import { Badge, Card } from "react-bootstrap";

export default function OfferTwo({ amount }) {
  return (
    <div className="mt-5 mx-5">
      {amount ? (
        <div>
          <Card style={{ background: "#2a3142", color: "#eef4fc" }}>
            <Card.Body>
              <h6 className="mb-3">
                <Badge className="" bg="danger">
                  20% Off
                </Badge>{" "}
                is applied
              </h6>
              <h3>
                Final discounted price : ₹{Math.round(amount - amount * 0.2)}
              </h3>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div>No Data Found!</div>
      )}
    </div>
  );
}
