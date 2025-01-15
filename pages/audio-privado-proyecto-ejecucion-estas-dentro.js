const AudioPrivadoProyectoEjecucionEstasDentro = () => {
  return (
    <div className="w-full font-playfair">
      <div className="bg-stone-50 p-4 sm:p-20 my-12">
        <header>
          <h1 className="text-2xl sm:text-5xl sm:leading-[60px] text-center  pb-16 font-bold">
            Aquí tienes tu audio
          </h1>
        </header>

        <div className="flex justify-center">
          <audio controls controlsList="nodownload">
            <source
              src="https://res.cloudinary.com/dh2hwwzpy/video/upload/v1736972959/BID-audio-PE-2_mp2j2s.mov"
              type="audio/mp3"
            ></source>
          </audio>
        </div>
      </div>
    </div>
  );
};

export default AudioPrivadoProyectoEjecucionEstasDentro;
