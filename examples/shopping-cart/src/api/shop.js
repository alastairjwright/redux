/**
 * Mocking client-server processing
 */
const TIMEOUT = 100;

export default {
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT)
};
