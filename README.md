All my chat name was insired by "All-My-Circuits" from futurama

What is this repo?
This is basic chating application created using below tech stack
1. Java
2. Spring Boot
3. STOMP (Websocket is underline tech)
4. Typescript
5. Angular
6. H2 DB
7. OAuth2.0

How can i use this repo?
1. Checkout the repo
2. Open VS Code or your prefered IDE for typescript and and create workspace at "all-my-chat\angular-client\chat-app"
3. Run command "ng serve" from above location and you are set for UI
4. Now open Intellij / eclipse for JAVA (Please note i use eclipse so i might have commited some eclipse related file sorry about that)
5. Import as maven project and select "all-my-chat\backend" as path let maven do its thing
6. Run project as java application using "ChatApplication.java" file

Misc.
I have used H2 file based verient as DB so you might need to make sure you have correct path for DB location
default path is "E:/output/chat" you can configure that using "application.properties" and "spring.datasource.url"

You would see "client-secret" commited but dont worry about it i am planning to remove the okta application by 7 May 2021
If you are looking afterwords you might need to create your own otherwise just drop me a mail and will help you get sorted.
same goes for configuration in UI (Hint look for environment.ts and environment.prod.ts file)

Any Known limitation ?
Well Yes i had very limited time to build this so I made below choices
1. "Agent needs to have email address as 'agent@servicedesk.com'" You can always remove this by using group/role configuration of Okta.
2. When new topic (A context which you are talking about) is introduce it does not automatically reflect on Agent screen (Screen has to be reloaded) The solution of this is introduction to event bus (Capturing events from application we already do that just need to extend the beviour) for application events simple stuff might take 2-3 hours.
3. STOMP... i didnt wanted to support binary file transfer so well its not avaliable

Do I even know if this works ? or am i gonna waste my hour to do all that and figure out repo doesnt work?
well here you go i recored the demo for you hope that makes you happy :)


https://user-images.githubusercontent.com/20898329/116806835-4f86d500-ab4d-11eb-8ad6-f12b672f7b7a.mp4

