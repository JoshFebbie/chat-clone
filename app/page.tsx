import { SunIcon } from "@heroicons/react/24/solid"; //Or Outline

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen
    px-2 text-[#1e997b]">
      <h1 className="text-5xl font-bold mb-20">Faj'sGPT</h1>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-10 w-10 text-[#f1791e]" />
          <h2>Examples</h2>
        </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the meaning of life? And why are we here?"
            </p>
            <p className="infoText">"Why is the sky blue?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-10 w-10 text-[#f1791e]" />
          <h2>Examples</h2>
        </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the meaning of life? And why are we here?"
            </p>
            <p className="infoText">"Why is the sky blue?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-10 w-10 text-[#f1791e]" />
          <h2>Examples</h2>
        </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the meaning of life? And why are we here?"
            </p>
            <p className="infoText">"Why is the sky blue?"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
