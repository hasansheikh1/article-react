import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import image from "./pos.jpg"

function Hi() {
  return <div className="container"></div>;
}

function Post(props) {
  return (
    <div className="post">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <img src={props.image} alt="place" />
    </div>
  );
}

function Page() {
  return (
    <div className="page">
      I'm a page component
      <Post
        title="FP Solutions Takes $3M For Hardware Startup Accelerator"
        text="Los Angeles-based FP (First Principle) Solutions announced on Friday that it has raised $3M in a seed funding round, to back its efforts to create a new, hardware-focused accelerator. According to the company, it itends to further develop the hardware"
        image="https://thumbs.dreamstime.com/b/abstract-technology-background-hi-tech-communication-concept-futuristic-digital-innovation-sci-fi-152088993.jpg"
      />
      <Post
        title="Fairbanks Daily News-Miner"
        text="The Infrastructure Investment and Jobs Act earmarked $5 billion nationally for electric vehicles, prompting the state to accelerate a plan required to receive Alaska’s portion."
        image="https://bloximages.newyork1.vip.townnews.com/newsminer.com/content/tncms/assets/v3/editorial/4/8a/48aba1f6-1a8d-11ed-943f-c78a9c28a515/62f6d2b3071c1.image.jpg?crop=1590%2C972%2C44%2C8&resize=990%2C605&order=crop%2Cresize"
      />

      <Post
        title="Elon Musk está bajo investigación por la accidentada compra de Twitter"
        text="Editorial: Gaming / Facebook / Twitter / YouTube / Instagram / Noticias / Discord /Telegram / Google News\r\nElon Musk lanzó una oferta de $44 MMDD para comprar Twitter. Sin embargo, el acuerdo no se h… [+2275 chars]"
        image="https://static01.nyt.com/images/2022/05/16/multimedia/16economy-briefing-musk/16economy-briefing-musk-jumbo.jpg?quality=75&auto=webp"
      />

    <Post
        title="FP Solutions Takes $3M For Hardware Startup Accelerator"
        text="Los Angeles-based FP (First Principle) Solutions announced on Friday that it has raised $3M in a seed funding round, to back its efforts to create a new, hardware-focused accelerator. According to the company, it itends to further develop the hardware"
        image="https://thumbs.dreamstime.com/b/abstract-technology-background-hi-tech-communication-concept-futuristic-digital-innovation-sci-fi-152088993.jpg"
      />

    </div>
  );
}
ReactDOM.render(<Page />, document.querySelector("#root"));
