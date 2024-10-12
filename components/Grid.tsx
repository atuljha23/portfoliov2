"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

function Grid() {
  return (
    <div>
      <section id="about">
        <BentoGrid>
          {gridItems.map((item) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              titleClassName={item.titleClassName}
              imgClassName={item.imgClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
}

export default Grid;
