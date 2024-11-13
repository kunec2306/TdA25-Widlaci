export default defineEventHandler( async (event) =>{

    const requestBody = await readBody(event);
    
    const db = useDatabase("database");

    await db.sql`CREATE TABLE IF NOT EXISTS games
    
        (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                Name TEXT,
                Email TEXT 
        )
    
    `;

    const result = await db.sql`INSERT INTO  games (Name, Email) VALUES (${requestBody.name}, ${requestBody.email})`
    console.log(result)

});
