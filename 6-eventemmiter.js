const EventEmitter=require('events')

const customEmitter=new EventEmitter()

customEmitter.on('responce',()=>{
  console.log('data received')

})

customEmitter.emit('responce')