import { PaintBucket } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between p-5">
        <div className="">
          <p>Gustavo Ventieri</p>
        </div>
        <div className="flex gap-3">
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Curriculo</a>
          <a href="">Contate-me</a>
        </div>
        <div className="">
          <button className="flex-row">
            <PaintBucket /> Tema
          </button>
        </div>
      </div>
    </header>
  );
};
