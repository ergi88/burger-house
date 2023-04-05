import React from "react";
import Grid from "@material-ui/core/Grid";
import { Drawer, Tooltip } from "antd";
import "antd/dist/antd.css";

import Product from "./Product/Product";
import useStyles from "./styles";
import DrawerProducts from "./DrowerProducts/DrowerProducts";
import "./styles.css";
import { useRef, useState } from "react";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

const Products = ({
  products = [],
  onAddToCart,
  cart,
  onUpdateCartQty,
  onEmptyCart,
}) => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const productRef = useRef();

  if (!products.length) return <p>Ngarkim...</p>;

  const { line_items = [] } = cart || {};

  const line_items_length = line_items.length;

  const handleScrollToProducts = () => {
    window.scrollTo({ top: productRef.current.offsetTop, behavior: "smooth" });
  };

  const drawerFooter = [
    <Tooltip
      title={
        !line_items_length
          ? "Zgjidh produkte per te vazhduar!"
          : "Vazhdo me pagesen!"
      }
    >
      <Link to={"/checkout"}>
        {" "}
        <button disabled={!line_items_length}>Paguaj</button>
      </Link>
    </Tooltip>,
    " ",
    <Tooltip
      title={
        !!line_items_length ? "Zbraze shporten!" : "Zgjidh produkte fillimisht!"
      }
    >
      <button disabled={!line_items_length} onClick={onEmptyCart}>
        Zbraze
      </button>
    </Tooltip>,
  ];

  return (
    <div className={classes.content}>
      <div className={classes.informativePart}>
        <div className={classes.informationPartContainer}>
          <div className={classes.titulli}>Burger House</div>
          <div className={classes.sllogani}>Duhet ta provosh</div>
          <button
            className={classes.scrollToProducts}
            onClick={handleScrollToProducts}
          >
            Shko te menuja
          </button>
        </div>
      </div>
      <div className={classes.productsTitle} ref={productRef}>
        Produktet
        <div
          className={classes.drawerOpen}
          onClick={() => setDrawer((prev) => !prev)}
        >
          <Badge badgeContent={line_items.length} color="secondary">
            <ShoppingCart className={classes.shoppingCard} />
          </Badge>
        </div>
      </div>

      <Drawer
        title="Shporta ime"
        placement="right"
        onClose={() => setDrawer(false)}
        visible={drawer}
        footer={drawerFooter}
      >
        {line_items.map((lineItem) => (
          <DrawerProducts
            item={lineItem}
            title="Shporta Ime"
            onUpdateCartQty={onUpdateCartQty}
          />
        ))}
      </Drawer>

      <div className={classes.productGridContainer}>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
