create application with: bunx create-next-app@latest .
create an account with uploadthing, generate an api key. uploadthing will be used to upload images and files

Setup Shadcn-ui with: bunx --bun shadcn-ui@latest init add

Setup local database with: MYSQL workbench

create authentication with: clerk 

add clerk themes with: bun add @clerk/theme

install uploadthing with : bun add uploadthing @uploadthing/react

install clerk/nextjs with: bun add @clerk/nextjs

intall prisma for bun with: bun add prisma @prisma/client

initialize prisma with: bunx prisma init --datasource-provider mysql 

generate prisma with: bunx primsa generate

push db with: bunx prisma db push

add tremor with : bun add @tremor/react
add uuid with : bun add uuid and then bun add @types/uuid