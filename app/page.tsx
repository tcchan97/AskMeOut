"use client";
import Image from 'next/image';
import myGif1 from '../public/bear-cute.gif'
import myGif2 from '../public/bubududu-panda.gif'
import myGif3 from '../public/dudu.gif'
import myGif4 from '../public/peach-goma-love.gif'
import myGif5 from '../public/hmph-mad.gif'
import { useState } from 'react';


export default function Home() {
  var gifExcited = myGif1;
  var gifDefault = myGif3;
  var gifMad = myGif5;
  var gifHappy = myGif4;

  var phrases = ['Why Not!', "Wrong Answer Try Again!", "Are you sureee?", "Nah thats gotta be wrong", "Sorry Wrong Button", "Sorry Nope", "Oopsie wrong"]


  const [gifImage, setGifImage] = useState(gifDefault);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  var [isClickedNo, setIsClickedNo] = useState(0);
  var [isSwitch, setIsSwitch] = useState(false);
  const [badPhrase, setBadPhrase] = useState("No >:(");

  const onMouseEnterYes = () => {
    if (isClicked == false) {
      if (isClicked2 == false) {
        setGifImage(gifExcited);
      }
    }
  }
  const onMouseEnterNo = () => {
    if (isClicked == false) {
      if (isClicked2 == false) {
        setGifImage(gifMad);
      }
    }

  }

  const onMouseLeave = () => {
    if (isClicked == false) {
      if (isClicked2 == false) {
        setGifImage(gifDefault);
      }
    }
  }


  const setPhrase = () => {
    setIsClicked(true);
    setIsClickedNo(isClickedNo += 1);
    setBadPhrase(phrases[isClickedNo % (phrases.length)]);



    if (isClickedNo % (phrases.length) == 5) {
      setIsSwitch(true);
    }
    else {
      setIsSwitch(false);
    }
    setGifImage(gifMad);
    var element = document.getElementById('yesButton');
    if (element) {
      element.style.width = (element.offsetWidth + 10).toString() + "px";
      element.style.height = (element.offsetHeight + 10).toString() + "px";
    }
  }

  const setConfirm = () => {
    setGifImage(gifHappy)
    setIsClicked2(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className='gifContainer'>
        <Image src={gifImage} alt="my gif" height={400} width={400} />
      </div>
      {isClicked2 ? (
        <>
          <div className='question'>
            Yay Happy Valentines!
          </div>

        </>
      ) : (
        <>
          <div className='question'> Will you be my <span className='questionWord'>valentine</span>?</div>
          <div className='buttonContainer'>
            {
              isSwitch ? (
                <>
                  <button  className="bg-red-500 hover:bg-red-400 text-white font-bold h-16 px-10 border-b-4 border-red-700 hover:border-red-500 rounded" onMouseEnter={onMouseEnterNo} onMouseLeave={onMouseLeave} onClick={setPhrase}>
                    {badPhrase}
                  </button>
                  <button id="yesButton" className="bg-green-500 hover:bg-green-400 text-white font-bold h-16 px-10 border-b-4 border-green-700 hover:border-green-500 rounded" onMouseEnter={onMouseEnterYes} onMouseLeave={onMouseLeave} onClick={setConfirm}>
                    Yes :D
                  </button>
                </>

              ) :
                (
                  <>
                    <button id="yesButton" className="bg-green-500 hover:bg-green-400 text-white font-bold h-16 px-10 border-b-4 border-green-700 hover:border-green-500 rounded" onMouseEnter={onMouseEnterYes} onMouseLeave={onMouseLeave} onClick={setConfirm}>
                      Yes :D
                    </button>
                    <button  className="bg-red-500 hover:bg-red-400 text-white font-bold h-16 px-10 border-b-4 border-red-700 hover:border-red-500 rounded " onMouseEnter={onMouseEnterNo} onMouseLeave={onMouseLeave} onClick={setPhrase}>
                      {badPhrase}
                    </button>
                  </>
                )
            }
          </div>

        </>
      )

      }

    </main>
  );
}
