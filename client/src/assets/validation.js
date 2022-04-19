const validation = {
  NAME_REGEX: /^[a-zA-Z]{3,}$/,
  EMAIL_REGEX:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]{2,}(.[a-zA-Z0-9-]{2,})?$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
  POSTCODE_REGEX: /^[1-9][0-9]{3} ?[a-z]{2}$/i,
  SHOP_NAME_REGEX: /^[a-zA-Z0-9\s]{2,}$/,
  KVK_REGEX: /^[0-9a-zA-Z]{8}$/,
  PHONE_REGEX: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
  PRICE_REGEX: /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/,
  DESCRIPTION_REGEX: /^[a-zA-Z0-9.,!#$%&'*+/:()=?^_`{|}~-\s]{20,200}$/,
};

export default validation;
