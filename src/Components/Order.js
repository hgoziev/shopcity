import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

import "../Style/Order.css";
import CheckoutProduct from "../Components/CheckoutProduct";

function Order({ order }) {
  return (
    <div className="order">
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
    </div>
  );
}

export default Order;
