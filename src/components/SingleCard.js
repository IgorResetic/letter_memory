import { useEffect, useState } from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  
      const handleClick = () => {
        if (!disabled) {
          handleChoice(card);
        }
      };

      console.log("SNGLE CARD")
 
      return (
        <div className="card">
          <div className={flipped ? "flipped" : ""}>
            <img className="front" src={card.src} alt="card front" />
            <img
              className="back"
              src={card.back.src}
              onClick={handleClick}
              alt="card back"
            />
          </div>
        </div>
      );
}

export default SingleCard;
/*
export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const cardImages = [
    { src: "/img/cover/cover_a.png", letter: 'A' },
    { src: "/img/cover/cover_b.png", letter: 'B' },
    { src: "/img/cover/cover_c.png", letter: 'C' },
    { src: "/img/cover/cover_d.png", letter: 'D' },
    { src: "/img/cover/cover_e.png", letter: 'E' },
    { src: "/img/cover/cover_f.png", letter: 'F' },
    { src: "/img/cover/cover_g.png", letter: 'G' },
    { src: "/img/cover/cover_h.png", letter: 'H' },
    { src: "/img/cover/cover_i.png", letter: 'I' },
    { src: "/img/cover/cover_j.png", letter: 'J' },
    { src: "/img/cover/cover_k.png", letter: 'K' },
    { src: "/img/cover/cover_l.png", letter: 'L' },
    { src: "/img/cover/cover_m.png", letter: 'M' },
    { src: "/img/cover/cover_n.png", letter: 'N' },
    { src: "/img/cover/cover_o.png", letter: 'O' },
    { src: "/img/cover/cover_p.png", letter: 'P' },
    { src: "/img/cover/cover_r.png", letter: 'R' },
    { src: "/img/cover/cover_s.png", letter: 'S' },
    { src: "/img/cover/cover_t.png", letter: 'T' },
    { src: "/img/cover/cover_u.png", letter: 'U' },
    { src: "/img/cover/cover_v.png", letter: 'V' },
    { src: "/img/cover/cover_z.png", letter: 'Z' },
  ];

  const[cover, setCover] = useState([])

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  const chooseRandomCover = (num = 1) => {
    const res = cover;
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * cardImages.length);
       if(res.indexOf(cardImages[random]) !== -1){
          continue;
       };
       res.push(cardImages[random]);
       i++;
    };

    useState(res)
 };

 chooseRandomCover()

 console.log(cover)

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="img/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
*/