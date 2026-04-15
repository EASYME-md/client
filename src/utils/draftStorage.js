const DRAFT_KEY = 'easyme:draft';

export const loadDraft = () => {
  try {
    return localStorage.getItem(DRAFT_KEY);
  } catch (err) {
    return null;
  }
};

export const saveDraft = (text) => {
  try {
    if (text) {
      localStorage.setItem(DRAFT_KEY, text);
    } else {
      localStorage.removeItem(DRAFT_KEY);
    }
  } catch (err) {
    // localStorage may be unavailable (private mode, quota) — silently ignore
  }
};

export const clearDraft = () => {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch (err) {
    // ignore
  }
};
