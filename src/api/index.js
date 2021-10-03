export const fetchContents = async (linkId) => {
  try {
    if (!linkId) {
      return;
    }

    const response = await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${linkId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const { message, text } = await response.json();

    if (message === 'NOT_FOUND') {
      console.log('해당 페이지는 존재하지 않습니다.');
      return;
    }

    if (message === 'OK') {
      return text;
    }
  } catch (err) {
    return err.message;
  }
};

export const saveContents = async (url, text) => {
  const linkId = url.slice(1);

  try {
    await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${linkId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ linkId, text }),
    });

  } catch (err) {
    return err.message;
  }
};
