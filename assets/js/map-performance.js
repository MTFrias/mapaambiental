(function () {
  if (!window.L || !L.TileLayer) return;

  const mobile = window.matchMedia('(max-width: 768px)').matches;
  Object.assign(L.TileLayer.prototype.options, {
    updateWhenIdle: true,
    updateWhenZooming: false,
    keepBuffer: mobile ? 0 : 1
  });
}());
