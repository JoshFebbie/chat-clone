import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline"; //Or Outline

function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen
    px-2 text-[#1e997b]"
    >
      <h1 className="text-5xl font-bold mb-20">FajAi</h1>

      <div className="flex space-x-4 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 text-[#f1791e]" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the most poisonous creature on Earth?"
            </p>
            <p className="infoText">"Why is the sky blue?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 text-[#f1791e]" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change FajAi Model to use</p>
            <p className="infoText">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText">
              Hot toast notifications when FajAi is thinking!
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 text-[#f1791e]" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful intstructions or biased results
            </p>
            <p className="infoText">
              Limited knowledge of world events post 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
