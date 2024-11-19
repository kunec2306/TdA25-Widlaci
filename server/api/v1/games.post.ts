export default defineEventHandler( async (event) =>{

    const requestBody =  await readBody(event);

    const db = useDatabase("database");

    await db.sql`CREATE TABLE IF NOT EXISTS games
    
        (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                Gamename TEXT,
                Difficulty TEXT,
                Board TEXT
        )
    
    `;

    const result = await db.sql`INSERT INTO  games (GameName, Difficulty, Board) VALUES (${requestBody.name}, ${requestBody.difficulty}, ${requestBody.board})`
    console.log(result)

    const games = await db.sql`SELECT * FROM games`;
    

    return games.rows
});
