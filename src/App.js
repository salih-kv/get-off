import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import OfferOne from "./components/OfferOne";
import OfferTwo from "./components/OfferTwo";
import OfferThree from "./components/OfferThree";
import NotFound from "./components/NotFound";

export default function App() {
  const [amount, setAmount] = useState();
  const [displayCoupons, setDisplayCoupons] = useState(false);

  return (
    <BrowserRouter>
      <Header
        displayCoupons={displayCoupons}
        setDisplayCoupons={setDisplayCoupons}
      />
      <Routes>
        <Route
          index
          element={
            <Home
              amount={amount}
              setAmount={setAmount}
              displayCoupons={displayCoupons}
              setDisplayCoupons={setDisplayCoupons}
            />
          }
        />

        <Route path="offer1" element={<OfferOne amount={amount} />} />
        <Route path="offer2" element={<OfferTwo amount={amount} />} />
        <Route path="offer3" element={<OfferThree amount={amount} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
