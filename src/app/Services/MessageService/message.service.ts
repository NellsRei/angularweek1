import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  public message: string[] =[
    'Bang Bang - By Big Bang',
    'Like My father - Jax',
    'Alone - Rhys Lewis ',
    'Hate that - Key and Taeyeon'
  ]
  generatetext(){
    const randommessage = Math.floor(Math.random()* this.message.length)
    const final = this.message[randommessage]
    return final

  }
}
