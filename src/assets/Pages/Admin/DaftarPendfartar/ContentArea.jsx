"use client";
import React from "react";
import FilterSection from "./FilterSection";
import TableSection from "./TableSection";
import StatusLegend from "./StatusLegend";

function ContentArea() {
  return (
    <section className="w-full p-1">
      <FilterSection />
      <TableSection />
      <StatusLegend />
    </section>
  );
}

export default ContentArea;
