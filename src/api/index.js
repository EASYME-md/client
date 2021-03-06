const SERVER_URI = process.env.REACT_APP_SERVER_URI;

export const fetchContents = async (linkId) => {
  try {
    if (!linkId) {
      return;
    }

    const response = await fetch(`${SERVER_URI}/d/${linkId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const { message, code, text } = await response.json();

    if (message === 'NOT_FOUND') {
      throw new Error(`${code} Not Found`);
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
    const response = await fetch(`${SERVER_URI}/d/${linkId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ linkId, text }),
    });

    const { code, message } = await response.json();

    if (message !== 'OK') {
      throw Error(`${code} Internal Server Error`);
    }

  } catch (err) {
    throw err.message;
  }
};
