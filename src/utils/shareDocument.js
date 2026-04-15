import { setShareUrl } from '../features/slice';
import { buildShareUrl } from './urlShare';

const shareDocument = async (textArea, dispatch) => {
  const text = textArea ? textArea.value : '';
  const url = buildShareUrl(text);

  try {
    await navigator.clipboard.writeText(url);
  } catch (err) {
    // clipboard unavailable (insecure origin, permission denied) — modal still shows the URL
  }

  dispatch(setShareUrl(url));
};

export default shareDocument;
