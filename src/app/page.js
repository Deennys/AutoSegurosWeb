import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="header bg-sky-600">
      <Header />
      <HomeCarousel />
    </div>
  )
}
