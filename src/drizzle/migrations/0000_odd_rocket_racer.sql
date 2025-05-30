CREATE TABLE "bookTable" (
	"bookId" serial PRIMARY KEY NOT NULL,
	"bookName" text,
	"bookYear" integer,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
