import Approach from "@/components/Approch";
import Approch from "@/components/Approch";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonial from "@/components/Testimonial";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="mt-10" />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonial />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
