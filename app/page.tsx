import Image from "next/image";

import linkedinIcon from "./images/linkedin.png";
import githubIcon from "./images/github.png";
import twitterIcon from "./images/twitter.png";
import instagramIcon from "./images/instagram.png";
import workProgressIcon from "./images/work-in-progress.png";

export default function Home() {
  return (
    <main className="flex p-4 justify-center items-center h-screen text-white bg-slate-900">
      <div>
        <div className="flex justify-center">
          <Image
            src={workProgressIcon}
            width={100}
            height={100}
            alt="Work In Progress Icon"
          />
        </div>
        <div className="text-center">
          <p className="md:text-4xl">COMING SOON</p>
          <p className="md:text-5xl">UNDER CONSTRUCTION</p>
        </div>
        <div className="mt-8 w-full p-4 bg-slate-600 rounded-lg">
          <p className="text-sm md:text-lg text-center">
            Follow me on social media
          </p>
          <ul className="flex gap-4 mt-3 justify-center">
            <li>
              <a href="https://www.linkedin.com/in/valindio">
                <Image
                  src={linkedinIcon}
                  alt="linkedin profile"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/valindio">
                <Image
                  src={githubIcon}
                  alt="github profile"
                  width={30}
                  height={30}
                ></Image>
              </a>
            </li>
            <li>
              <a href="https://x.com/valindio_r">
                <Image
                  src={twitterIcon}
                  alt="github profile"
                  width={30}
                  height={30}
                ></Image>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/valindio">
                <Image
                  src={instagramIcon}
                  alt="github profile"
                  width={30}
                  height={30}
                ></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
