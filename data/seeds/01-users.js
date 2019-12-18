const bcrypt = require( 'bcryptjs' );

exports.seed = knex => {
  const pass = bcrypt.hashSync( 'pass', 14 );
  return knex( 'users' )
    .insert( [
      { username: "alberto", password: pass, department: 'accounting'       },
      { username: "anthony", password: pass, department: 'customer_service' },
      { username: "michael", password: pass, department: 'human_resources'  },
      { username: "steve",   password: pass, department: 'sales'            }
    ] );
};
