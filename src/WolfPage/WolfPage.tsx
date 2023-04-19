import React, { useState } from 'react';
import style from './WolfPage.module.css';

function WolfPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>('');

  async function getRandomImage(): Promise<void> {
    const response = await fetch('https://api.unsplash.com/photos/random?query=wolf', {
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
        <h1 className={style.title}>Why Wolves Matters</h1>
      </div>
      <div className={style.video_pics}>
        <div className={style.video_container}>
          <h2>The Fable of the Wolf</h2>
          <iframe
            className={style.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yA4wcCUtxUw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className={style.img_button_container}>
          <div>
            <button type="button" className={style.button} onClick={getRandomImage}>
              Want to see wolves
            </button>
          </div>
          {imageUrl && (
            <div className={style.imageWrapper}>
              <img
                className={style.image}
                src={imageUrl}
                alt="Wolf"
              />
            </div>
          )}
        </div>
      </div>
      <p>Wolves once roamed the United States before decades of unregulated slaughter
       wiped them out. It was not until they disappeared that people began to realize
       the crucial role of wolves in maintaining the health of nature. The gray wolf
       was one of the first to be protected under the Endangered Species Act. Its
       reintroduction in the northern Rocky Mountains has restored balance to the
       ecosystem.
      </p>
      <p>Wolves play an important role in the ecosystem, and their return to their
        ancestral lands has helped restore nature to Yellowstone National Park. In 1926,
        the last wolf pack was killed, which led to an increase in the population of elk,
        which were hunted by predators. As a result, the moose population grew so much
        that they ate and trampled almost all the vegetation in the park, which led to
        extensive soil erosion.
      </p>
      <p>By 1995, the pack of wolves had returned to the park and they began to prey on
        the moose, which helped level the population and changed the behavior of the
        ungulates. Moose stopped grazing in the valleys and gorges, where they were
        attacked by predators. Grass, shrubs and trees in these areas soon recovered,
        and mice, birds, foxes, bears and other animals began to return there. As a
        result, the plants strengthened the soil along the banks and erosion decreased.
      </p>
      <p>Beavers reappeared in the park, which raised the level of the rivers and created
        a natural habitat for the local nature: it was occupied by otters, muskrats, ducks,
        reptiles, fish, and amphibians. The presence of beavers helped to create ponds
        and wetlands, which are essential for many aquatic species. The reestablishment
        of a healthy ecosystem in Yellowstone has had a positive ripple effect throughout
        the region, and has demonstrated the importance of preserving and protecting
        keystone species like the gray wolf.
      </p>
    </div>
  );
}

export default WolfPage;
