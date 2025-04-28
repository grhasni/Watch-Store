import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="gr-main">
        <div className="gr-container">
          <span>
            Worldclass Best <span className="yellow"> Watch Shop.</span>
          </span>

          <p>
            Our shop has world-class best quality new attractive models and
            houses that will blow your mind.
          </p>
          <p>
            Time is very important in today's world. It is very necessary to
            keep an eye on him for proper use of this time. So we, have put
            beautiful attractive watches for proper use by measuring this time.
          </p>
          <div className="flex-row gap-2">
            <Link to="/shopnow" className="btn m-2 yellow-bg btn-primary">
              Shop Now
            </Link>
            <Link to="/contact" className="btn m-2 yellow-bg btn-primary">
              Contact Now
            </Link>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="img">
          <img src="/images/home-bg-image.jpg" alt="add pic here" />
        </div>
        <div className="text">
          <div>
            <p className="heading">We Are Give You Best Model Watch.</p>
            <p>
              We are glad to present the new Lawson Assortment. These are three
              quartz models planned considering effortlessness and style kept.
              They come in various sizes and tones, and all component a tempered
              steel back — leaving sufficient room for a customized etching. The
              etching administration is free with any watch from the Lawson
              series.
            </p>
            <p>
              We keep all kinds of new and updated models and watches in our
              shop, so that everyone can choose the watch that they like. Time
              is very important in today's world. It is very necessary to keep
              an eye on him for proper use of this time. So we, have put
              beautiful attractive watches for proper use by measuring this
              time.
            </p>
          </div>
          <a href="about.html" className="btn btn-primary ">
            Read More...
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
