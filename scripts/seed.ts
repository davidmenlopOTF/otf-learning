const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Front End" },
        { name: "Back End" },
        { name: "Design" },
        { name: "Engineering" },
        { name: "QA" },
        { name: "Project Management" },
        { name: "Marketing" },
        { name: "Strategists" },
        { name: "Sales" },
        { name: "Human Resources" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();