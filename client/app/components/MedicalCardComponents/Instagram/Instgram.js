export default function Instagram() {
    return (
      <div className="instagram-embed-container">
        <iframe
          src="https://www.instagram.com/share/reel/_dbgzUvIP"
          width="400"
          height="480"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          title="Instagram Embed"
          className="w-3/4 aspect-video self-stretch md:min-h-96 ml-[13vw] mt-10 mb-10"
        />
      </div>
    );
  }
