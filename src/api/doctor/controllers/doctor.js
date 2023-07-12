'use strict';

/**
 * doctor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const _ = require('lodash');

module.exports = createCoreController('api::doctor.doctor', ({strapi}) => ({
  //for example this is your api for doctor's registartion
  async create(ctx)  {
    const user = ctx.state.user;
    const game_id = parseInt(ctx.request.body.data.game);
    ctx.request.body.data.user = user.id;

    const params = {
      ..._.omit(ctx.request.body, [
        'confirmed',
        'blocked',
        'confirmationToken',
        'resetPasswordToken',
        'provider',
      ]),
      provider: 'local',
    };


    if(rating) return ctx.badRequest('You already rated the game!');

    const entity = await strapi
    .service("api::rating.rating")
    .create(ctx.request.body);

    return {
      status: 200,
      message: 'Successfully rated the game!'
    }
}
}));
