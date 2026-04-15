import LZString from 'lz-string';

export const HASH_PREFIX = '#s=';

export const encodeForShare = (text) => {
  if (!text) return '';
  return LZString.compressToEncodedURIComponent(text);
};

export const decodeFromShare = (compressed) => {
  if (!compressed) return '';
  try {
    return LZString.decompressFromEncodedURIComponent(compressed) || '';
  } catch (err) {
    return '';
  }
};

export const parseShareHash = (hash) => {
  if (!hash || !hash.startsWith(HASH_PREFIX)) return '';
  return decodeFromShare(hash.slice(HASH_PREFIX.length));
};

export const buildShareUrl = (text) => {
  const compressed = encodeForShare(text);
  return `${window.location.origin}/d${HASH_PREFIX}${compressed}`;
};
