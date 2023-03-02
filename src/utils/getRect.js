/**
 * Returns the size and position of the provided element relative to `window`.
 *
 * @param {Element} element The element to find the size and position for.
 *
 * @return {object} The size and position of the provided element.
 */
export default (element, _scale) => {
  const rect = element.getBoundingClientRect();
  const scale = Number.isFinite(_scale) ? _scale : 1;

  return {
    height: (rect.height / scale),
    left: (rect.left / scale) + window.pageXOffset,
    top: (rect.top / scale) + window.pageYOffset,
    width: (rect.width / scale),
  };
};
