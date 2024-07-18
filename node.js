const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // or specify a file path

db.serialize(() => {
    db.run("CREATE TABLE contacts (name TEXT, email TEXT, message TEXT)");

    const stmt = db.prepare("INSERT INTO contacts VALUES (?, ?, ?)");
    stmt.run("John Doe", "john@example.com", "Hello, this is a message.");
    stmt.finalize();

    db.each("SELECT rowid AS id, name, email, message FROM contacts", (err, row) => {
        console.log(`${row.id}: ${row.name} - ${row.email} - ${row.message}`);
    });
});

db.close();
