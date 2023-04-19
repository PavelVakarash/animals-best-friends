import React, { useState } from 'react';
import style from './CatPage.module.css';

function CatPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>('');

  async function getRandomImage(): Promise<void> {
    const response = await fetch('https://api.unsplash.com/photos/random?query=cat', {
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
        <h1 className={style.title}>Why Cats Matters</h1>
      </div>
      <div className={style.video_pics}>
        <div className={style.video_container}>
          <h2>Why Humans Are Obsessed with Cats</h2>
          <iframe
            className={style.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8ZgjNeXXTjU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className={style.img_button_container}>
          <div>
            <button type="button" className={style.button} onClick={getRandomImage}>
              Want to see cats
            </button>
          </div>
          {imageUrl && (
            <div className={style.imageWrapper}>
              <img
                className={style.image}
                src={imageUrl}
                alt="Cat"
              />
            </div>
          )}
        </div>
      </div>
      <p>Cats and humans have lived together for a long time. While a lot of work
        goes into having cats in our homes, we can all agree that they add even
        more than they take.
      </p>
      <p>Scientists believe that the benefits of loving a cat may even extend to
        our health. Studies have shown that people are less likely to die of a heart
        attack if they own a cat (Adnan I Qureshi, 2009).
      </p>
      <p>Perhaps even more interesting are the reports of cats purrs helping people heal.
      </p>
      <p><strong>Why Do Cats Purr?
         </strong>
      </p>
      <p>This is an age-old question and one to which scientists do not know the
        exact answer yet. However, it is known that cats often purr when they are happy,
        sometimes when they are nervous, very often when they are hurt, and sometimes when
        their human is hurt or sick.
      </p>
      <p>The Purrfect Angle provides your kitty with satisfying alternative scratching positions.
      </p>
      <p>In fact, there are many stories of cats cuddling up with and purring for extended
        times for their sick human.
      </p>
      <p><strong>How Could Purrs Help Humans Heal?
         </strong>
      </p>
      <p>For centuries, healers have used the power of sound in their work. It is believed
        that certain frequencies or tones of sound can have varying healing effects on the body.
        Here are some of the ways that purrs might help humans with health concerns:
      </p>
      <ul>
        <li><strong>Purring releases endorphins in cats, and it can do the same thing in humans,
             too.
            </strong> Lowered stress hormones are helpful for healing, lowering blood pressure,
          and helping people cope with illness, too
        </li>
        <li><strong>Cat purring has been shown to fall between 25 and 140 Hz.
            </strong>
        The same
        frequency has been shown to aid in the healing of broken bones, joint and tendon repair, a
        nd wound healing. Cats are well-known for their ability to heal quickly from their own
        broken bones, and the incidences of joint problems and bone cancer in cats are low. It is
        possible that cat purrs can help humans heal faster, too.
        </li>
        <li><strong>Clinical observations of cats that are suffering from upper respiratory
              conditions resulting in dyspnea, or trouble breathing, indicate that purring helps
              the cat breathe more easily.
            </strong>
        In fact, respiratory distress related to heart
          disease is not nearly as common in cats as it is in dogs and humans. A person with
          respiratory problems might also be able to breathe easier if a purring cat is nearby.
        </li>
        <li><strong>There are many stories of people with migraines whose headaches are
             eased
             or extinguished when they lie with their heads close to purring cats
            </strong>
        </li>
      </ul>
      <p>Overall, while the exact reasons for why cats purr may not be fully understood,
        it is clear that there are many potential health benefits to being around these
        furry felines.
      </p>
    </div>
  );
}

export default CatPage;
