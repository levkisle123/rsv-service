CREATE TABLE `bookings` (
	`id` text PRIMARY KEY NOT NULL,
	`key` text NOT NULL,
	`payload` text NOT NULL,
	`created` text NOT NULL,
	`notification` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `bookings_key_unique` ON `bookings` (`key`);--> statement-breakpoint
CREATE TABLE `rate_limits` (
	`id` text PRIMARY KEY NOT NULL,
	`count` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` integer PRIMARY KEY NOT NULL,
	`json` text NOT NULL
);
