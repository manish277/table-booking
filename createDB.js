'use strict';

async function createDatabase() {
    const config = require(process.cwd() + '/knexfile');
    config.connection.database = null;
    const knex = require('knex')(config);

        await knex.raw('DROP DATABASE reservations; ');
        await knex.raw('CREATE DATABASE IF NOT EXISTS reservations; ');

    await knex.destroy();
}

createDatabase();