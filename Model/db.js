import postgres from 'postgres'

const sql = postgres('postgres://ife@localhost:5432/kingdomsboxing');

export { sql };