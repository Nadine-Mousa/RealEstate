using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CleanArchitecture.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCityTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5ca75fc7-7564-4bdb-befb-16b1005f0318");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d5d3f6f4-1dd2-4a61-809e-0336ceb801a9");

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdatedOn",
                table: "Cities",
                type: "datetime2",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "ca03c1de-d3d1-4323-84e4-7280c86d2273", "2", "User", "User" },
                    { "cf761861-6256-4821-b5d3-828c68bb279a", "1", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ca03c1de-d3d1-4323-84e4-7280c86d2273");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cf761861-6256-4821-b5d3-828c68bb279a");

            migrationBuilder.DropColumn(
                name: "LastUpdatedOn",
                table: "Cities");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5ca75fc7-7564-4bdb-befb-16b1005f0318", "2", "User", "User" },
                    { "d5d3f6f4-1dd2-4a61-809e-0336ceb801a9", "1", "Admin", "Admin" }
                });
        }
    }
}
