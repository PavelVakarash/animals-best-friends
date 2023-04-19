import React from 'react';
import style from './HomePage.module.css';

function Home(): JSX.Element {
    return (
        <div className={style.container}>
            <h1>Lifeless World: Why Every Animal Matters</h1>
            <div>
                <h2>Taigan Lion Park - Where Lions Hug Tourist</h2>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={style.video}
                  frameBorder="0"
                  height="315"
                  src="https://www.youtube.com/embed/hGA-UiYU-OU"
                  title="YouTube video player"
                  width="560"
                />
            </div>
            <div>
                <h2>Animals Reunited With Owner After Years !</h2>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={style.video}
                  frameBorder="0"
                  height="315"
                  src="https://www.youtube.com/embed/i9XIMKxSAGk"
                  title="YouTube video player"
                  width="560"
                />
            </div>
            <div>
                <h2>Animals Reunited With Owner After Years #2</h2>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={style.video}
                  frameBorder="0"
                  height="315"
                  src="https://www.youtube.com/embed/Bi4p_ActSQE"
                  title="YouTube video player"
                  width="560"
                />
            </div>
            <p>
                The animal world of our planet is not only diverse but also essential for
                the balance and survival of the ecosystem. Animals play an important
                role in maintaining the health of the planet and its inhabitants,
                including humans. Here are some ways animals contribute to the planet:
            </p>
            <h3>1. Pollinators
            </h3>
            <p>
                Bees, butterflies, birds, and other animals are important pollinators
                that help plants reproduce. They transfer pollen from one flower to
                another, which allows plants to fertilize and produce fruit. Without
                pollinators, many plants would not be able to reproduce and survive,
                which would have a ripple effect on the entire ecosystem. In fact, many
                crops that humans rely on for food and other resources are dependent on
                pollinators.
            </p>
            <h3>2. Regulators of Population
            </h3>
            <p>
                Animals can also act as regulators of the population of other living
                organisms. They can be predators that control the population of other
                animals or prey that are a source of food for predators. Their presence
                affects the balance of the ecosystem, which helps prevent the overgrowth
                of certain species and ensures the survival of others. This balance also
                helps maintain the health of the ecosystem, which in turn benefits all
                its inhabitants.
            </p>
            <h3>3. Source of Food and Other Products
            </h3>
            <p>Cows, pigs, chickens, and other farm animals benefit humanity by providing us
               with food, milk, and other products. In addition, animal waste can be used as
               fertilizer for plants, which helps improve the soil and increase crop yields.
               These animals also contribute to the economy and provide a livelihood for many
               people around the world.
            </p>
            <h3>4. Improve Soil Quality
            </h3>
            <p>Animal waste is not the only thing that can help improve soil quality.
              Bacteria and fungi
              help recycle organic material, which helps improve soil quality and
              maintain soil fertility.
              These organisms break down dead plant and animal matter and release
              nutrients back into the
              soil. This process is essential for the growth and survival of plants,
              which in turn benefits
              all the animals that depend on them for food.
            </p>
            <h3>5. Preserve Biodiversity
            </h3>
            <p>Every species of animal plays a unique role in the ecosystem. The loss of any
               one species
               can have a ripple effect on the entire ecosystem, which can lead to the loss
               of other
               species and the collapse of the ecosystem as a whole. Therefore, preserving
               biodiversity
               is essential for the health and survival of the planet and its inhabitants.
               Animals, plants,
               bacteria, and fungi all contribute to biodiversity and the maintenance of
               the ecosystem.
            </p>
            <p>In conclusion, the animal world is an essential component of the planets ecosystem.
              Each species plays a role in maintaining the balance and health of the ecosystem,
              which in turn benefits all its inhabitants, including humans. It is important to
              recognize the value of animals and their contributions to the planet, and to take
              steps to protect and preserve them for future generations.
            </p>
        </div>
    );
}
    export default Home;
    