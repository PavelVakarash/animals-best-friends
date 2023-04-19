import React, { useState } from 'react';
import style from './DogPage.module.css';

function DogPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>('');

  async function getRandomImage(): Promise<void> {
    const response = await fetch('https://api.unsplash.com/photos/random?query=dog', {
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
        <h1 className={style.title}>Why Dogs Matters</h1>
      </div>
      <div className={style.video_pics}>
        <div className={style.video_container}>
          <h2>Paul van Dyk & Sue McLaren - Guiding Light</h2>
          <iframe
            className={style.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0t6U9iRgD7k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className={style.img_button_container}>
          <div>
            <button type="button" className={style.button} onClick={getRandomImage}>
              Want to see dogs
            </button>
          </div>
          {imageUrl && (
            <div className={style.imageWrapper}>
              <img
                className={style.image}
                src={imageUrl}
                alt="Dog"
              />
            </div>
          )}
        </div>
      </div>
      <p>Most pet owners are clear about the immediate joys that come with sharing
        their lives with companion animals. However, many of us remain unaware of
        the physical and mental health benefits that can also accompany the pleasure
        of snuggling up to a furry friend. It is only recently that studies have begun
        to scientifically explore the benefits of the human-animal bond.
      </p>
      <p>Pets have evolved to become acutely attuned to humans and our behavior and emotions.
        Dogs, for example, are able to understand many of the words we use, but they are
        even better at interpreting our tone of voice, body language, and gestures. And like
        any good human friend, a loyal dog will look into your eyes to gauge your emotional
        state and try to understand what you are thinking and feeling (and to work out when
        the next walk or treat might be coming, of course).
      </p>
      <p>Pets, especially dogs and cats, can reduce stress, anxiety, and depression,
        ease loneliness, encourage exercise and playfulness, and even improve your
        cardiovascular health. Caring for an animal can help children grow up more
        secure and active. Pets also provide valuable companionship for older adults.
        Perhaps most importantly, though, a pet can add real joy and unconditional
        love to your life.
      </p>
      <p>While it is true that people with pets often experience greater health benefits
        than those without, a pet does not necessarily have to be a dog or a cat. A rabbit
        could be ideal if you are allergic to other animals or have limited space but still
        want a furry friend to snuggle with. Birds can encourage social interaction and help
        keep your mind sharp if you are an older adult. Snakes, lizards, and other reptiles
        can make for exotic companions. Even watching fish in an aquarium can help reduce muscle
        tension and lower your pulse rate.
      </p>
      <p> Studies have shown that pet owners are less likely to suffer from depression than
        those without pets. People with pets have lower blood pressure in stressful situations
        than those without pets. One study even found that when people with borderline hypertension
        adopted dogs from a shelter, their blood pressure declined significantly within five months.
        Playing with a dog, cat, or other pet can elevate levels of serotonin and dopamine,
        which calm and relax. Pet owners also have lower triglyceride and cholesterol levels
        (indicators of heart disease) than those without pets. Heart attack patients with pets
        survive longer than those without. Pet owners over age 65 make 30 percent fewer visits
        to their doctors than those without pets.
      </p>
      <p>One of the reasons for these therapeutic effects is that pets fulfill the basic human
        need for touch. Stroking, hugging, or otherwise touching a loving animal can rapidly
        calm and soothe you when you are stressed or anxious. The companionship of a pet can
        also ease loneliness, and most dogs are a great stimulus for healthy exercise, which
        can substantially boost your mood and ease depression.
      </p>
    </div>
  );
}

export default DogPage;
