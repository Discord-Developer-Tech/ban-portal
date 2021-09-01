import proptypes from "prop-types";

function Card({ username, time, reason }) {
  return (
    <div class="flex justify-center items-center">
      <div class="max-w-sm bg-gray-600 p-6 rounded-md tracking-wide shadow-lg">
        <div id="header" class="flex items-center mb-4">
          <div id="header-text" class="leading-5 ml-6 sm">
            <h4 id="name" class="text-xl text-gray-100 font-semibold">
              Username: {username}
            </h4>
            <h5 id="job" class="font-semibold text-gray-300">
              Time: {time}
            </h5>
          </div>
        </div>
        <div>
          <a className="mr-2 text-gray-200">Reason:</a>
          <q class="italic text-gray-200">
           {reason}
          </q>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  username: proptypes.string.isRequired,
  time: proptypes.string.isRequired,
  reason: proptypes.string.isRequired,
};

export default Card;
