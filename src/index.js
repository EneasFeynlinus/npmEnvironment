import connecToDatabase  from "./dtabase/data.js"
async function main() {
   await connecToDatabase(
    process.env.USERDATABASE,
     process.env.PASSWORDDATABASE
    );
}

main();