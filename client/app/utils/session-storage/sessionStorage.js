"use client"
export const getSessionStorageWithExpiry = (key) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const itemStr = sessionStorage.getItem(key);
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item?.expiry) {
  
    sessionStorage.removeItem(key);
    return null;
  }

  return item?.value;
};


export const setSessionStorageWithExpiry = (key, value, ttl) => {
    const now = new Date();
  
    // `ttl` is the time-to-live in milliseconds
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
  
    sessionStorage.setItem(key, JSON.stringify(item));
  };
  