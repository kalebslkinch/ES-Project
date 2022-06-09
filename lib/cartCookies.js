import cookies from 'js-cookie';

export const getCookie = () => {
  const cookie = cookies.get('cart');
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};

export const setCookie = (data) => {
  cookies.set('cart', data);
};

export const removeCookie = () => cookies.remove('cart');
