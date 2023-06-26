import React from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home({
  amount,
  setAmount,
  displayCoupons,
  setDisplayCoupons,
}) {
  const navigate = useNavigate();

  function getOff() {
    if (typeof amount !== "number") {
      document.getElementById("warning").style.display = "block";
      return false;
    } else if (amount < 499) {
      document.getElementById("warning").innerText =
        "Offers below ₹499 are currently unavailable.";
      document.getElementById("warning").style.display = "block";
      return false;
    }
    setAmount(amount);
    setDisplayCoupons(true);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      getOff();
    }
  }

  displayCoupons && navigate("/offer1");

  return (
    <main
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Alert
        id="warning"
        variant="warning"
        className="text-center w-50"
        style={{ display: "none", position: "absolute", top: "80px" }}
      >
        Enter valid input
      </Alert>
      <Card
        className="text-center w-50 p-3"
        style={{ background: "#2a3142", color: "#eef4fc" }}
      >
        <Card.Header>
          To see the available offers, enter the amount and click "Generate
          Offers"
        </Card.Header>
        <Card.Body>
          <Form.Control
            className="p-3 mt-3"
            value={amount}
            type="number"
            placeholder="Enter your amount"
            onChange={(e) => setAmount(parseInt(e.target.value))}
            onKeyDown={handleKeyDown}
          />
          <Button
            className="w-100 mt-3 p-3"
            style={{ background: "#626ed4" }}
            onClick={() => getOff(amount)}
          >
            Generate Offers
          </Button>
        </Card.Body>
      </Card>
    </main>
  );
}
