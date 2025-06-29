using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CleanArchitecture.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddTablesFurnishandPropertyTypesandMainEntrance : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "039475c1-1aa5-4d50-a33b-69769321cb56");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4d71fd83-feda-40be-83fb-9974557564ff");

            migrationBuilder.CreateTable(
                name: "FurnishTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FurnishTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "mainEntrances",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Direction = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mainEntrances", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PropertyTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PropertyTypes", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "17021f97-d273-4e4d-b6f9-ed534c51ec72", "2", "User", "User" },
                    { "888e1967-4c3a-4fe7-9a22-195df27f3179", "1", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FurnishTypes");

            migrationBuilder.DropTable(
                name: "mainEntrances");

            migrationBuilder.DropTable(
                name: "PropertyTypes");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "17021f97-d273-4e4d-b6f9-ed534c51ec72");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "888e1967-4c3a-4fe7-9a22-195df27f3179");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "039475c1-1aa5-4d50-a33b-69769321cb56", "1", "Admin", "Admin" },
                    { "4d71fd83-feda-40be-83fb-9974557564ff", "2", "User", "User" }
                });
        }
    }
}
