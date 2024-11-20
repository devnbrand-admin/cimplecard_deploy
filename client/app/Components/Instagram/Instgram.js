export default function Instagram() {
    return (
      <div className="instagram-embed-container">
        <iframe
          src="https://www.instagram.com/p/DChTO5Apobf/?utm_source=ig_embed&amp;utm_campaign=loading"
          width="400"
          height="480"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          title="Instagram Embed"
          className="w-3/4 aspect-video self-stretch md:min-h-96 ml-[15vw]"
        />
      </div>
    );
  }
