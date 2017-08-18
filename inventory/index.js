module.exports = function (context, req) {
  context.done(null, { body: context.bindings.inventory });
};