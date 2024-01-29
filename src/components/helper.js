let thoughtId = 0;

// Generate id for each though
export const generateThoughtId = () => {
  thoughtId += 1;
  return thoughtId;
};

// seconds to wait before removing thought
export const getExpirationTime = () => {
  // change to number of seconds to wait
  const waitSeconds = 10;
  return Date.now() + waitSeconds * 1000;
};

// TODO - random color for each new thought
// TODO - Add unit Testing
