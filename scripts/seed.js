const { db } = require('@vercel/postgres');

// This is where we can seed data into Postgres database.

async function main() {
  const client = await db.connect();

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
