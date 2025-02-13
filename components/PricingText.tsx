import React from "react";
import styles from "./bubble.module.css";

const PricingText = () => {
    return (
        <div className="grid  place-content-center ">
            <BubbleText />
        </div>
    );
};

const BubbleText = () => {
    return (
        <h2 className="dark:text-indigo-300 text-center text-5xl font-thin text-neutral-700">
            {"Pricing list selection".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    );
};

export default PricingText;