import React, { useState } from 'react';
import style from './PigPage.module.css';

function PigPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>('');

  async function getRandomImage(): Promise<void> {
    const response = await fetch('https://api.unsplash.com/photos/random?query=pig', {
      headers: {
        Authorization: 'Client-ID sSG2pbyMLBmClp3hm-EnU-m_QMCuhL5c7BN-b2HhJrI'
      }
    });

    const data = await response.json();
    setImageUrl(data.urls.regular);
  }

  return (
    <div className={style.container}>
      <div className={style.title_container}>
        <h1 className={style.title}>Why Pigs Matters</h1>
      </div>
      <div className={style.video_pics}>
        <div className={style.video_container}>
          <h2>Pig Is Smarter Than His Dog Siblings | The Dodo</h2>
          <iframe
            className={style.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zSC0EzteRyw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className={style.img_button_container}>
          <div>
            <button type="button" className={style.button} onClick={getRandomImage}>
              Want to see pigs
            </button>
          </div>
          {imageUrl && (
            <div className={style.imageWrapper}>
              <img
                className={style.image}
                src={imageUrl}
                alt="Pig"
              />
            </div>
          )}
        </div>
      </div>
      <p>An interesting fact: according to some studies, pigs can actually be smarter than dogs
      in some aspects. For example, in one experiment conducted at the University of Cambridge,
      pigs showed an amazing ability to memorize new words and associate them with appropriate
      objects, and then use this knowledge in the skill of finding food. Dogs, on the other hand,
      tend to prefer to find food by smell rather than by words. In addition, pigs can also be
      better than dogs at solving certain problems in logic and abstract thinking. In one 2015
      study, pigs were trained to use a mirror to find food hidden behind them while dogs were
      unable to do so. However, as with any animal study, there are other factors that can affect
      the results. For example, pigs, like any other animal, may have their own unique abilities
      and weaknesses depending on their breed, temperament, and environment. So while pigs may
      be smarter than dogs in some ways, that does not mean they are smarter overall. After all,
      each animal is unique and has its own advantages and disadvantages depending on many factors.
      </p>
      <p>Pigs are considered to be intelligent animals for several reasons. Here are a few:
      </p>
      <ul>
        <li>Problem-solving: Pigs have been shown to be able to solve complex problems and
          puzzles. For example, they can learn how to operate simple machines, like levers
          and switches, to obtain rewards such as food.
        </li>
        <li>Social behavior: Pigs are social animals and are known to form strong bonds
          with each other. They can recognize and remember other pigs, as well as humans,
          and can communicate with each other using a variety of vocalizations.
        </li>
        <li>Memory: Pigs have good long-term memory and are able to remember information for
          several years. They can remember the location of food and water sources, as well
          as the faces of other pigs and humans.
        </li>
        <li>Learning: Pigs are quick learners and can be trained to perform a variety of tasks.
          They are often used in circuses and shows to perform tricks and stunts.
        </li>
        <li>Emotional intelligence: Pigs have been shown to be able to express a range of emotions,
          including happiness, sadness, and fear. They can also recognize and respond to the
          emotions of other pigs and humans.
        </li>
      </ul>
      <p>Overall, pigs are considered to be intelligent animals with a range of cognitive
        abilities that make them well-suited to a variety of tasks, from problem-solving
        to emotional support.
      </p>
    </div>
  );
}

export default PigPage;
