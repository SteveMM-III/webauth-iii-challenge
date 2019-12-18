exports.up = knex => {
  return knex.schema.createTable( 'users', db => {
    db
      .increments();

    db
      .string( 'username', 128 )
      .notNullable()
      .unique();
    db
      .string( 'password', 128 )
      .notNullable();
    db  
      .string( 'department', 128 )
      .notNullable();
  } );
};

exports.down = ( knex, Promise ) => { knex.schema.dropTableIfExists( 'users' ) };
