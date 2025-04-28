import React from "react";
import Card from "./Card";
import watchData from "../Data/Data";

function ShopNow() {
  const renderWatchSection = (category, title) => (
    <section className="watch-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="watch-container">
          <div className="watch">
            {watchData
              .filter((watch) => watch.category === category)
              .map((watch) => (
                <Card
                  key={watch.id}
                  title={watch.title}
                  description={watch.description}
                  price={watch.price}
                  imageUrl={watch.imageUrl}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="shop-page">
      {renderWatchSection("Boys", "Boys Stylish Watch")}
      {renderWatchSection("Girls", "Girls Watch")}
      {renderWatchSection("Antique", "Antique Watch")}
      {renderWatchSection("Smart", "Smart Watch")}
    </div>
  );
}

export default ShopNow;
