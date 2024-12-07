"use client";

const Card = ({ image, description, time }) => {
  return (
    <div className="w-80 flex-col relative m-3 rounded-xl bg-white">
      <img
        src={image}
        alt="Card Image"
        className="w-56 h-36 absolute rounded-xl"
        style={{
          left: "50%",
          transform: "translate(-50%, -25%)",
        }}
      />
      <div className="h-28"></div>
      <div className="w-full p-3 bg-white rounded-xl">
        <div className="flex">
          <span className="text-sm" style={{ color: "#AB6BD4" }}>
            {description}
          </span>
          <img
            src="/Assets/Star.png"
            alt="Star Icon"
            className="w-3.5 h-3.5 mr-4"
          />
          <img
            src="/Assets/Ellipsis.png"
            alt="options Icon"
            className="w-5 h-5 mr-4"
          />
        </div>
        <div className="text-sm my-2" style={{ color: "#AB6BD4" }}>
          {time}
        </div>
        <div className="flex content-center justify-center">
          <img
            src="/Assets/Comments.png"
            alt="Edit Icon"
            className="w-5 h-5 mr-4"
          />
          <button
            style={{
              backgroundColor: "#AB6BD4",
            }}
            className="flex items-center justify-center px-3 text-white rounded-full focus:outline-none"
          >
            <img
              src="/Assets/Edit.png"
              alt="Edit Icon"
              className="w-5 h-5 mr-4"
            />
            <span>Edit this File</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
