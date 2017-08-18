module.exports = function (context, req) {
  context.res = { body: context.bindings.inventory };
  context.done();
};