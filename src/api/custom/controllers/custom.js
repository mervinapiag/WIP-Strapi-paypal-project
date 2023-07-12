'use strict';

/**
 * A set of functions called "actions" for `custom`
 */

module.exports = {
  async test(ctx) {
    return ctx.badRequest('YO NOT FOUND');
  }
};
