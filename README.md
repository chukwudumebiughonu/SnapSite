create application with: bunx create-next-app@latest .
create an account with uploadthing, generate an api key. uploadthing will be used to upload images and files

Setup Shadcn-ui with: bunx --bun shadcn-ui@latest init add

Setup local database with: MYSQL workbench

Update the next.config.mjs file

create authentication with: clerk 

add clerk themes with: bun add @clerk/themes

install uploadthing with : bun add uploadthing @uploadthing/react

install clerk/nextjs with: bun add @clerk/nextjs

intall prisma for bun with: bun add prisma @prisma/client

initialize prisma with: bunx prisma init --datasource-provider mysql 

generate prisma with: bunx prisma generate

push db with: bunx prisma db push

add tremor with : bun add @tremor/react
add uuid with : bun add uuid and then bun add @types/uuid

add tanstack with: bun add @tanstack /react-table

install drag and drop with: bun add react-beautiful-dnd

add it types with: bun add @types/react-beautiful-dnd 

install stripe with: bun add stripe

install stripe/stripe-js with: bun add @stripe/stripe-js

install @stripe/react-stripe-js with: bun add @stripe/react-stripe-js