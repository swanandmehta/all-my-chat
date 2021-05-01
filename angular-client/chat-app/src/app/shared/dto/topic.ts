import { Message } from "./message";

export class Topic {
    userId: string = '';
    name: string = '';
    uuid: string = '';
    messageList: Message[] = []; 
}
