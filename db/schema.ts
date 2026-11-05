import {sqliteTable,integer,text} from 'drizzle-orm/sqlite-core';
export const settings=sqliteTable('settings',{id:integer('id').primaryKey(),json:text('json').notNull()});
export const bookings=sqliteTable('bookings',{id:text('id').primaryKey(),key:text('key').notNull().unique(),payload:text('payload').notNull(),created:text('created').notNull(),notification:text('notification').notNull()});
export const rateLimits=sqliteTable('rate_limits',{id:text('id').primaryKey(),count:integer('count').notNull()});
