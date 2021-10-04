const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

export const fetchContents = async (linkId) => {
  try {
    if (!linkId) {
      return;
    }

    const response = await fetch(`http://localhost:${SERVER_PORT}/${linkId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const { message, text } = await response.json();

    if (message === 'NOT_FOUND') {
      throw new Error('Not Found');
    }

    if (message === 'OK') {
      return text;
    }
  } catch (err) {
    throw err.message;
  }
};

export const saveContents = async (linkId, text) => {
  try {
    await fetch(`http://localhost:${SERVER_PORT}/${linkId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ linkId, text }),
    });

  } catch (err) {
    throw err.message;
  }
};
