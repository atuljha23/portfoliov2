import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

function Testimonial() {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from{" "}
        <span>
          happy{" "}
          <span className="text-purple">
            colleagues and
            <span className="text-purple"> friends</span>
          </span>
        </span>
      </h1>
      <div className="flex flex-col items-center mt-4 max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center gap-4 justify-center mt-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="w-10 h-10 rounded-full" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
