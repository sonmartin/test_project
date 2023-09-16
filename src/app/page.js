"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import { nav, ListProduct } from "./constans";
import IconPage from "../app/config/Icons";

export default function Home() {
  const classes = styles;
  const [activeColor, setActiveColor] = useState("yellowone");
  const handleNavColor = (itemColor) => {
    setActiveColor(itemColor);
  };
  return (
    <main>
      <div className={classes.container}>
        <div className={classes.ContainerContent}>
          <div className={classes.wrapperNav}>
            <ul className={classes.NavContent}>
              {nav.map((itemNav) => (
                <li
                  key={itemNav.id}
                  className={
                    activeColor === itemNav.activeColor
                      ? classes.activeColorNav
                      : ""
                  }
                  onClick={() => handleNavColor(itemNav.activeColor)}
                >
                  {itemNav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.ContainerProduct}>
          {ListProduct.map((itemListProduct) => (
            <div className={classes.wrapperProduct} key={itemListProduct.id}>
              <a href={itemListProduct.Url}>
                <Image
                  // layout="fill" objectFit="cover"
                  width={850}
                  height={400}
                  className={classes.imgProduct}
                  src={itemListProduct.img}
                  alt="product"
                  // width={300}
                  // height={300}
                />
              </a>
              <div className={classes.wrapperTitle}>
                <div className={classes.title}>
                  <h6>
                    <strong>{itemListProduct.title}</strong>
                  </h6>
                  <Image src={IconPage.IcNext} alt="iconNext" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
