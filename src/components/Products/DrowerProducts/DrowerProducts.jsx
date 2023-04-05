import "./styles.css";

import React from "react";
import {Typography} from "@material-ui/core";

const DrawerProducts = ({item, onUpdateCartQty}) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  return (
    <div className="drawerProducts">
      <div className="informationContainer">
        <div className="titulliProduktitTeDrawerit">{item.name}</div>
        <div variant="CmimiProduktitTeDrawerit">
          {item.line_total.formatted_with_symbol}
        </div>
      </div>
      <div className="cardActions">
        <button
          className="cardActionButton"
          onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
        >
          -
        </button>
        <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
        <button
          className="cardActionButton"
          onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DrawerProducts;
